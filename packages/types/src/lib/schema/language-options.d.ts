import type { EcmaVersion, Globals, Parser, SourceType } from '.'

export interface LanguageOptions {
  /* The ECMAScript version (or revision number). */
  ecmaVersion?: EcmaVersion
  /* The source code type. */
  sourceType?: SourceType
  /* The global variable settings. */
  globals?: Globals
  /* The parser to use. */
  parser?: Parser
  /* The parser options to use. */
  parserOptions?: Record<string, unknown>
}

