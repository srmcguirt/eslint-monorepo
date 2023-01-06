import type { LiteralUnion } from 'type-fest'

export type Parser = LiteralUnion<
  'babel-eslint' | '@typescript-eslint/parser' | 'typescript-eslint'
>
