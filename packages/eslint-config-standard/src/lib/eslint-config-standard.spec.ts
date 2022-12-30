import { eslintConfigStandard } from './eslint-config-standard';

describe('eslintConfigStandard', () => {
  it('should work', () => {
    expect(eslintConfigStandard()).toEqual('eslint-config-standard');
  });
});
