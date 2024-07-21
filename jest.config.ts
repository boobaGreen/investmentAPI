import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTest.ts'],
  testMatch: ['<rootDir>/src/test/**/*.test.ts'],
  moduleDirectories: ['node_modules', 'src'], // This line is fine if modules are in `src`
};

export default config;
