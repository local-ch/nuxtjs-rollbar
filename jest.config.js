module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'lib/**/*.ts',
    '!lib/plugin.ts',
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json',
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/lib/$1',
    '^~~$': '<rootDir>',
    '^@@$': '<rootDir>',
    '^@/(.*)$': '<rootDir>/lib/$1',
  },
  testEnvironment: 'node',
  testTimeout: 60000,
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
};
