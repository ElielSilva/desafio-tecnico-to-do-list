export default {
  testEnvironment: "jest-environment-jsdom",  // Ambiente de teste como jsdom
  transform: {
    "^.+\\.tsx?$": "babel-jest",  // Para transformar arquivos TS ou JSX/TSX com Babel
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",  // Para mapear o alias @ para src
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],  // Para usar jest-dom para assertivas no DOM
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],  // Ignorar node_modules e dist
  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],  // Transformar módulos .mjs se necessário
};