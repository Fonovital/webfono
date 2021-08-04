module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
      '\\.(png|jpg|jpeg|gif)$': 'identity-obj-proxy',
      '\\.(tsx|ts)$': 'identity-obj-proxy',
      '^@/components/(.*)': "<rootDir>/src/components/$1",
      '^@/styles/(.*)': "<rootDir>/src/styles/$1",
      '^@/section/(.*)': "<rootDir>/src/sections/$1",
      '^@/constant/(.*)': "<rootDir>/src/constant/$1",
      '^@/hooks/(.*)': "<rootDir>/src/hooks/$1",
      '^@/public/(.*)': "<rootDir>/public/$1",
      '^@/model/(.*)': "<rootDir>/src/model/$1",
    },
    moduleDirectories: ['node_modules', '.'],
    errorOnDeprecated: true,
    // globals: {
    //   "__DEV__": false
    // }
  };