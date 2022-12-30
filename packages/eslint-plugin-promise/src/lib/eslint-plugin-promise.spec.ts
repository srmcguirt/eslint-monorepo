import { eslintPluginPromise } from './eslint-plugin-promise';

describe('eslintPluginPromise', () => {
  it('should work', () => {
    expect(eslintPluginPromise()).toEqual('eslint-plugin-promise');
  });
});
