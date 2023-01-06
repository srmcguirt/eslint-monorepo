import type { TSESLint } from '@typescript-eslint/utils'
import type { LinterOptions } from './linter-options'
import type { LanguageOptions } from './language-options'

export interface FlatConfigRecord {
  files?: string[]
  ignores?: string[]
  languageOptions?: LanguageOptions
  linterOptions?: LinterOptions
  processor?: string | TSESLint.Linter.Processor
  plugins?: string[]
  rules?: TSESLint.Linter.Config['rules']
  settings?: Record<string, unknown>
}
