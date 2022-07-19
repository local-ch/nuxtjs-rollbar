module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'jest',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
    'array-bracket-newline': ['error', 'consistent'],
    'comma-dangle': ['error', 'always-multiline'],
    'jest/expect-expect': ['error', { 'assertFunctionNames': ['expect', 'supertest.**.expect'] }],
    'max-len': ['error', { 'code': 140, 'tabWidth': 2, 'ignoreComments': true }],
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'quote-props': ['error', 'consistent'],
    'semi': ['error', 'always'],
    'semi-style': ['error', 'last'],
    'space-before-function-paren': ['error', { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always' }],
    'space-in-parens': ['error', 'never'],
    'vue/no-mutating-props': 0,
    'vue/no-v-html': 0,
  },
};