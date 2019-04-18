module.exports = {
  verbose: true,
  testMatch: [
    '**/?(*.)+(spec).js?(x)',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'test/reports/coverage',
};
