import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js'
  },
  preset: 'ts-jest',
}

export default jestConfig
