module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    './rules/best-practices',
    './rules/errors',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ],
}
