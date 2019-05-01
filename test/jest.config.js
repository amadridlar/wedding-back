module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)+(test).js?(x)',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'test/reports/coverage',
};
