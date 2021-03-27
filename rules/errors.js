module.exports = {
  rules: {
    'getter-return': ['error', { allowImplicit: true }],
    'no-await-in-loop': 'error',
    'no-dupe-else-if': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-extra-parens': ['error', 'functions'],
    'no-promise-executor-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-useless-backreference': 'error',
    'use-isnan': [
      'error', {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
}
