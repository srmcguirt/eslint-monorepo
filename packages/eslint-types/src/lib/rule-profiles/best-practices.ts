import type { ESLintRules } from 'eslint/rules'

export interface BestPracticesRules {
  'accessor-pairs'?: ESLintRules['accessor-pairs']
  'array-callback-return'?: ESLintRules['array-callback-return']
  'block-scoped-var'?: ESLintRules['block-scoped-var']
  'class-methods-use-this'?: ESLintRules['class-methods-use-this']
  'complexity'?: ESLintRules['complexity']
  'consistent-return'?: ESLintRules['consistent-return']
  'curly'?: ESLintRules['curly']
  'default-case'?: ESLintRules['default-case']
  'dot-location'?: ESLintRules['dot-location']
  'dot-notation'?: ESLintRules['dot-notation']
  'eqeqeq'?: ESLintRules['eqeqeq']
  'guard-for-in'?: ESLintRules['guard-for-in']
  'max-classes-per-file'?: ESLintRules['max-classes-per-file']
  'no-alert'?: ESLintRules['no-alert']
  'no-caller'?: ESLintRules['no-caller']
  'no-case-declarations'?: ESLintRules['no-case-declarations']
  'no-div-regex'?: ESLintRules['no-div-regex']
  'no-else-return'?: ESLintRules['no-else-return']
  'no-empty-function'?: ESLintRules['no-empty-function']
  'no-empty-pattern'?: ESLintRules['no-empty-pattern']
  'no-eq-null'?: ESLintRules['no-eq-null']
  'no-eval'?: ESLintRules['no-eval']
  'no-extend-native'?: ESLintRules['no-extend-native']
  'no-extra-bind'?: ESLintRules['no-extra-bind']
  'no-extra-label'?: ESLintRules['no-extra-label']
  'no-fallthrough'?: ESLintRules['no-fallthrough']
  'no-floating-decimal'?: ESLintRules['no-floating-decimal']
  'no-global-assign'?: ESLintRules['no-global-assign']
  'no-implicit-coercion'?: ESLintRules['no-implicit-coercion']
  'no-implicit-globals'?: ESLintRules['no-implicit-globals']
  'no-implied-eval'?: ESLintRules['no-implied-eval']
  'no-invalid-this'?: ESLintRules['no-invalid-this']
  'no-iterator'?: ESLintRules['no-iterator']
  'no-labels'?: ESLintRules['no-labels']
  'no-lone-blocks'?: ESLintRules['no-lone-blocks']
  'no-loop-func'?: ESLintRules['no-loop-func']
  'no-magic-numbers'?: ESLintRules['no-magic-numbers']
  'no-multi-spaces'?: ESLintRules['no-multi-spaces']
  'no-multi-str'?: ESLintRules['no-multi-str']
  'no-new'?: ESLintRules['no-new']
  'no-new-func'?: ESLintRules['no-new-func']
  'no-new-wrappers'?: ESLintRules['no-new-wrappers']
  'no-octal'?: ESLintRules['no-octal']
  'no-octal-escape'?: ESLintRules['no-octal-escape']
  'no-param-reassign'?: ESLintRules['no-param-reassign']
  'no-proto'?: ESLintRules['no-proto']
  'no-redeclare'?: ESLintRules['no-redeclare']
  'no-restricted-properties'?: ESLintRules['no-restricted-properties']
  'no-return-assign'?: ESLintRules['no-return-assign']
  'no-return-await'?: ESLintRules['no-return-await']
  'no-script-url'?: ESLintRules['no-script-url']
  'no-self-assign'?: ESLintRules['no-self-assign']
  'no-self-compare'?: ESLintRules['no-self-compare']
  'no-sequences'?: ESLintRules['no-sequences']
  'no-throw-literal'?: ESLintRules['no-throw-literal']
  'no-unmodified-loop-condition'?: ESLintRules['no-unmodified-loop-condition']
  'no-unused-expressions'?: ESLintRules['no-unused-expressions']
  'no-unused-labels'?: ESLintRules['no-unused-labels']
  'no-useless-call'?: ESLintRules['no-useless-call']
  'no-useless-catch'?: ESLintRules['no-useless-catch']
  'no-useless-concat'?: ESLintRules['no-useless-concat']
  'no-useless-escape'?: ESLintRules['no-useless-escape']
  'no-useless-return'?: ESLintRules['no-useless-return']
  'no-void'?: ESLintRules['no-void']
  'no-warning-comments'?: ESLintRules['no-warning-comments']
  'no-with'?: ESLintRules['no-with']
  'prefer-named-capture-group'?: ESLintRules['prefer-named-capture-group']
  'prefer-promise-reject-errors'?: ESLintRules['prefer-promise-reject-errors']
  'radix'?: ESLintRules['radix']
  'require-await'?: ESLintRules['require-await']
  'require-unicode-regexp'?: ESLintRules['require-unicode-regexp']
  'vars-on-top'?: ESLintRules['vars-on-top']
  'wrap-iife'?: ESLintRules['wrap-iife']
  'yoda'?: ESLintRules['yoda']
}

export const bestPracticesRules: BestPracticesRules = {
  'accessor-pairs': 'error',
  "array-callback-return": ["error", {
    "allowImplicit": false,
  }],
}

export default {
  bestPracticesRules,
}