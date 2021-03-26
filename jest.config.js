/**
 * @type {import('@jest/types').Config}
 */
module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/', '<rootDir>/node_modules/'],
  coverageReporters: ['lcov', 'json'],
};
