// jest.config.js
export {
  preset: 'vite',  // Define o Vite como preset de testes
  testEnvironment: 'jsdom',  // Simula o ambiente de navegador
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',  // Usa o esbuild para compilar arquivos JavaScript e JSX
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],  // Configura o jest-dom para asserções mais legíveis
};