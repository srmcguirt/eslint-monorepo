import { AST as vueParser } from "vue-eslint-parser"
import { defineConfig } from "../eslint-config"

export default defineConfig({
  files: ['*.vue'],
  ignores: [],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
  },
  linterOptions: {},
  processor: {},
  plugins: [],
  rules: {},
  settings: {},
})

