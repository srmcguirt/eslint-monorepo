import eslint from 'eslint/lib/eslint/index.js'
import type { ESLint, Linter } from 'eslint'
const { FlatESLint } = eslint



export default {
  configs: {
    recommended: {
      plugins: ['import'],
      rules: {},
      languageOptions: {
        parserOptions: {}
      }
    },
    rules: {}
  }
}
