import standard from 'eslint-config-standard'
import importPlugin from '../import/index.js'
import nPlugin from '../n/index.js'
import promisePlugin from '../promise/index.js'

// const parserOptions = standard.parserOptions
const rules = standard.rules
// const globals = standard.globals

export default {
  // parserOptions,
  plugins: {
    import: importPlugin,
    n: nPlugin,
    promise: promisePlugin,
  },
  // globals,
  rules,
}
