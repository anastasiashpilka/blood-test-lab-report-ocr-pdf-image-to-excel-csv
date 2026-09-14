import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// In-memory fallback (per-instance, used when Upstash is not configured)
const memStore = new Map();

function memLimit(ip, limit, windowMs) {
  const now = Date.now();
  let e = memStore.get(ip);
  if (!e || now > e.resetAt) e = { count: 0, resetAt: now + windowMs };
  e.count++;
  memStore.set(ip, e);
  return { allowed: e.count <= limit, remaining: Math.max(0, limit - e.count) };
}

// Upstash limiter cache — one limiter instance per (limit, window) pair
const limiterCache = new Map();

function getUpstashLimiter(limit, windowSeconds) {
  const key = `${limit}:${windowSeconds}`;
  if (limiterCache.has(key)) return limiterCache.get(key);

  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    limiterCache.set(key, null);
    return null;
  }

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  const limiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(limit, `${windowSeconds} s`),
    prefix: 'rl',
  });

  limiterCache.set(key, limiter);
  return limiter;
}

export async function rateLimit(ip, { limit = 10, windowMs = 60_000 } = {}) {
  const windowSeconds = Math.round(windowMs / 1000);
  const limiter = getUpstashLimiter(limit, windowSeconds);

  if (!limiter) return memLimit(ip, limit, windowMs);

  try {
    const { success, remaining } = await limiter.limit(ip);
    return { allowed: success, remaining };
  } catch {
    // Upstash unreachable — fall back to in-memory so the app stays up
    return memLimit(ip, limit, windowMs);
  }
}

export function getIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  return (typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : null)
    ?? req.socket?.remoteAddress
    ?? 'unknown';
}
