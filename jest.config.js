const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

const resolveConfig = createJestConfig({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.test.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
});

// next/jest appends its own transformIgnorePatterns rather than merging —
// and Jest skips a file if ANY pattern matches — so passing an extra
// pattern above can't un-ignore anything next/jest already ignores.
// @upstash/redis pulls in uncrypto, which ships ESM-only, so it needs to
// be excluded from the default "don't transform node_modules" pattern.
module.exports = async () => {
  const config = await resolveConfig();
  config.transformIgnorePatterns = ['/node_modules/(?!(uncrypto)/)'];
  return config;
};
