module.exports = async () => {
  return {
    verbose: true,
    collectCoverageFrom: [
      "src/**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/vendor/**",
    ],
  };
};
//npm test (to run test )
