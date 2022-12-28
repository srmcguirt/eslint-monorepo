import babelParser from '@babel/eslint-parser'
import { defineConfig } from "../eslint-config"

export default defineConfig({
  files: ['**/*.js', '**/*.mjs'],
  ignores: [],
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        babelrc: false,
        configFile: false,
        presets: [
          [
            '@babel/preset-env',
            {
              'useBuiltIns': 'entry',
              'corejs': 3,
              'targets': {'> 0.25%, not dead'},
            }
          ]
        ],
      },
    },
  },
  linterOptions: {},
  processor: {},
  plugins: [],
  rules: {},
  settings: {},
})

