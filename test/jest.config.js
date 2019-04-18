module.exports = {
    "verbose": true,
  //uncomment the next line to get the coverage report
  //  "collectCoverage": true,
    "collectCoverageFrom": [
          "src/**/*.js",
          "!**/node_modules/**",
          ],
    "coverageDirectory":"test/reports/coverage",
    "testMatch": [
        "test/unit/**/*.spec.js"
    ]
  };