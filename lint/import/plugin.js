import { configs, rules } from 'eslint-plugin-import'

const plugin = {
  configs,
  environments: {},
  processors: {},
  rules,
}

function normalizePlugin(plugin) {
  const { configs, environments, processors, rules } = plugin
  return {
    configs: configs || {},
    environments: environments || {},
    processors: processors || {},
    rules: rules || {},
  }
}

/**
 * Reformatted import plugin
 * @type {Object}
 */
export const rules {
  plugins: [
    {
      import: normalizePlugin(plugin),
    },
  ],
}
