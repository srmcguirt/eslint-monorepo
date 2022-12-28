import { defineConfig } from "../eslint-config"

export default defineConfig({
  files: ['*.json', '*.json5'],
  ignores: [],
  languageOptions: {},
  linterOptions: {},
  processor: {},
  plugins: [],
  rules: {
    'jsonc/array-bracket-spacing': ['error', 'never'],
    'jsonc/comma-dangle': ['error', 'never'],
    'jsonc/comma-style': ['error', 'last'],
    'jsonc/indent': ['error', 2],
    'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'jsonc/no-octal-escape': 'error',
    'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
    'jsonc/object-curly-spacing': ['error', 'always'],
    'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
  },
  settings: {},
})

