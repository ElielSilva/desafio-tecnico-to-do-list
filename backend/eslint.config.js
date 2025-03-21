import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: ['**/node_modules/**', '**/dist/**'], 
    languageOptions: {
      parser: tsparser,
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'no-console': 'off'
    }
  }
]);
