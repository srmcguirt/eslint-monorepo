import { eslintFlatConfig } from './eslint-config';

describe('eslintFlatConfig', () => {

  const config = 'eslint:recommended'


  it('should accept predefined config', () => {
    expect(eslintFlatConfig(config)).toEqual('eslint:recommended');
  });
});
