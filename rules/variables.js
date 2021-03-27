module.exports = {
  rules: {
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': [
      'error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
    'no-use-before-define': [
      'error', {
        functions: true,
        classes: true,
        variables: false,
      },
    ],

  },
}
