// jest.config.js
export {
  preset: 'vite',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};