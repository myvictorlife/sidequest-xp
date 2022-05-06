module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  coverageThreshold: {
    global: {
      branches: 3,
      functions: 15,
      lines: 30,
      statements: 39,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/polyfills.ts',
  ],
  coveragePathIgnorePatterns: ['src/environments/*'],
  moduleNameMapper: {
    '^@sidequest-xp-store$': '<rootDir>/src/app/core/store/index.ts',
    '^@sidequest-xp-store/(.*)$': '<rootDir>/src/app/core/store/$1',
    '^@sidequest-xp-core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@sidequest-xp-shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@sidequest-xp-components/(.*)$': '<rootDir>/src/app/components/$1',
    '^@environment$': '<rootDir>/src/environments/environment',
    '^@environment/(.*)$': '<rootDir>/src/environments/$1',
  },
};
