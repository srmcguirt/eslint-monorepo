import { eslintConfig } from './eslint-config';

describe('eslintConfig', () => {

  const config = 'eslint:recommended'


  it('should work', () => {
    expect(eslintConfig(config)).toEqual('eslint-config');
  });
});
