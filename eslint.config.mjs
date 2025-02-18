import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
    quotes: 'single',
    arrowParens: true,
    braceStyle: '1tbs',
    allowSingleLine: false,
    blockSpacing: true,
    commaDangle: 'never',
    overrides: {
      'curly': 'error',
      'style/brace-style': 'error',
      'ts/no-dynamic-delete': 'error',
    },
  },
  yaml: false,
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
});
