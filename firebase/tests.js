import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

const getUserTestsRef = (userId) => collection(db, 'users', userId, 'tests');

const encodeRows = (rows) => rows.map((row) => JSON.stringify(row));
const decodeRows = (rows) => {
  if (!rows) return [];
  return rows.map((row) => (typeof row === 'string' ? JSON.parse(row) : row));
};

export const saveTest = (userId, { label, headers, rows, interpretationSummary = '' }) =>
  addDoc(getUserTestsRef(userId), {
    label,
    headers,
    rows: encodeRows(rows),
    interpretationSummary,
    createdAt: serverTimestamp(),
  });

export const getTests = async (userId) => {
  const q = query(getUserTestsRef(userId), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => {
    const data = d.data();
    return { id: d.id, ...data, rows: decodeRows(data.rows) };
  });
};

export const getTest = async (userId, testId) => {
  const ref = doc(db, 'users', userId, 'tests', testId);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  const data = snapshot.data();
  return { id: snapshot.id, ...data, rows: decodeRows(data.rows) };
};

export const deleteTest = (userId, testId) =>
  deleteDoc(doc(db, 'users', userId, 'tests', testId));

export const updateTestLabel = (userId, testId, label) =>
  updateDoc(doc(db, 'users', userId, 'tests', testId), { label });

export const updateTestInterpretation = (userId, testId, interpretationSummary) =>
  updateDoc(doc(db, 'users', userId, 'tests', testId), { interpretationSummary });

const isRowOutOfRange = (result, range) => {
  if (!result || !range) return false;
  try {
    const val = parseFloat(String(result).replace(',', '.'));
    if (isNaN(val)) return false;
    const rangeStr = String(range).trim();

    // operator-based: < 5.0, >= 3.5, > 10, etc.
    const operatorMatch = rangeStr.match(/^([<>]=?)\s*(.+)/);
    if (operatorMatch) {
      const op = operatorMatch[1];
      const limit = parseFloat(operatorMatch[2].replace(',', '.'));
      if (isNaN(limit)) return false;
      if (op === '<')  return val >= limit;
      if (op === '<=') return val > limit;
      if (op === '>')  return val <= limit;
      if (op === '>=') return val < limit;
    }

    // min-max: 3.5-5.0 or 3.5 - 5.0
    const parts = rangeStr.split('-').map((p) => p.trim());
    if (parts.length === 2) {
      const min = parseFloat(parts[0].replace(',', '.'));
      const max = parseFloat(parts[1].replace(',', '.'));
      if (!isNaN(min) && !isNaN(max)) return val < min || val > max;
    }
  } catch { /* unparseable range — treat as in-range */ }
  return false;
};

const RESULT_KEYWORDS = ['result', 'value', 'результат', 'значення', 'показник'];
const RANGE_KEYWORDS = ['range', 'interval', 'норма', 'референт', 'reference', 'normal'];

const matchesKeywords = (header, keywords) => {
  const lower = header.toLowerCase();
  return keywords.some((kw) => lower.includes(kw));
};

export const findResultIdx = (headers) =>
  headers.findIndex((h) => matchesKeywords(h, RESULT_KEYWORDS));

export const findRangeIdx = (headers) =>
  headers.findIndex((h) => matchesKeywords(h, RANGE_KEYWORDS));

export const countOutOfRange = (headers, rows) => {
  const resultIdx = findResultIdx(headers);
  const rangeIdx = findRangeIdx(headers);
  if (resultIdx === -1 || rangeIdx === -1) return null;

  return rows.reduce((count, row) => {
    return count + (isRowOutOfRange(row[resultIdx], row[rangeIdx]) ? 1 : 0);
  }, 0);
};
