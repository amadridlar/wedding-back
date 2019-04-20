module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)+(spec).js?(x)',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'test/reports/coverage',
};
