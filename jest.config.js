module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
  coverageReporters: ['lcov', 'json'],
};
