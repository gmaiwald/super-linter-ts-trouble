// eslint.config.js
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default await tseslint.config({
  extends: [
    js.configs.recommended,              // aktiviert Standard-JS-Regeln
    ...tseslint.configs.recommended,     // aktiviert TypeScript-Regeln
  ],
  files: ['**/*.{js,ts}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-empty-function': 'error',
    'semi': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'error'
  },
})

