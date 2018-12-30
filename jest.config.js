const path = require('path')

module.exports = {
  // explicit declaration that the testing environment is intended for browsers
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'test')
  ],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|sass|scss|less)$': require.resolve('./test/style-mock.js')
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}
