module.exports = {
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
  ],
  globals: {
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': '<rootDir>/preprocessor.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  testMatch: [
    '**/src/**/__tests__/*.(ts|js)',
  ],
};
