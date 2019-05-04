module.exports = {
  automock: false,
  verbose: true,
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)+(test).js?(x)',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/database/models/',
    '<rootDir>/src/index.js',
  ],
  coverageDirectory: 'test/reports/coverage',
};
