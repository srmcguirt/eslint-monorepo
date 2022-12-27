import type { ESLint, Linter } from 'eslint'
import type { LinterOptions } from './linter-options'
import type { LanguageOptions } from './language-options'

export interface FlatConfigRecord {
  files?: string[]
  ignores?: string[]
  languageOptions?: LanguageOptions
  linterOptions?: LinterOptions
  processor?: string | Linter.Processor
  plugins?: string[]
  rules?: Record<string, Linter.RulesRecord>
  settings?: Record<string, unknown>
}
