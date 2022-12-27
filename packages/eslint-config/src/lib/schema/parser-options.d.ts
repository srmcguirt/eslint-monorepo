import type { EcmaFeatures } from './ecma-features'
import type { EcmaVersion } from './ecma-version'

export interface ParserOptions {
  /* The optional Ecma features. */
  ecmaFeatures?: EcmaFeatures
  /* The ECMAScript version (or revision number). */
  ecmaVersion?: EcmaVersion
  /* The source code type. */
  sourceType?: 'script' | 'module'
  /* Allowing the use of reserved words as identifiers in ES3. */
  allowReserved?: boolean
}
