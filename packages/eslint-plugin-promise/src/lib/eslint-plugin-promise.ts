import promisePlugin from 'eslint-plugin-promise'

const { rules, rulesConfig } = promisePlugin
const configs = promisePlugin.configs

export default {
  rules,
  rulesConfig,
  configs,
}
