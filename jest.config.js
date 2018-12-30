module.exports = {
  // explicit declaration that the testing environment is intended for browsers
  testEnvironment: 'jest-environment-jsdom',
  setupTestFrameworkScriptFile: '<rootDir>/testSetup.js',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|sass|scss|less)$': require.resolve('./test/style-mock.js')
  }
}
