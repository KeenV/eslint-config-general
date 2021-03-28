module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
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
