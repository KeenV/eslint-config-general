module.exports = {
  rules: {
    // enforces return statements in callbacks of array's methods
    'array-callback-return': [
      'error', {
        allowImplicit: false,
        checkForEach: false,
      },
    ],

    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // enforce that class methods use "this"
    'class-methods-use-this': [
      'error', {
        exceptMethods: [],
      },
    ],

    // specify curly brace conventions for all control statements
    curly: ['error', 'multi-line'],

    // require default case in switch statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Enforce default clauses in switch statements to be last
    'default-case-last': 'error',

    // enforces consistent newlines before or after dots
    'dot-location': ['error', 'property'],

    // encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // require `for-in` loops to include an `if` statement
    'guard-for-in': 'error',

    // disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': 'error',

    // disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': ['error', { allowElseIf: false }],

    // disallow empty functions
    'no-empty-function': [
      'error', {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
        ],
      },
    ],

    // disallow the use of `eval()`
    'no-eval': 'error',

    // disallow extending native types
    'no-extend-native': 'error',

    // disallow unnecessary calls to `.bind()`
    'no-extra-bind': 'error',

    // disallow unnecessary labels
    'no-extra-label': 'error',

    // disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // disallow the use of `eval()`-like methods
    'no-implied-eval': 'error',

    // disallow the use of the `__iterator__` property
    'no-iterator': 'error',

    // disallow labeled statements
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': 'error',

    // disallow multiple spaces
    'no-multi-spaces': 'error',

    // disallow multiline strings
    'no-multi-str': 'error',

    // disallow `new` operators outside of assignments or comparisons
    'no-new': 'error',

    // disallow `new` operators with the `Function` object
    'no-new-func': 'error',

    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-new-wrappers': 'error',

    // disallow octal escape sequences in string literals
    'no-octal-escape': 'error',

    // disallow reassigning `function` parameters
    'no-param-reassign': [
      'error', {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
        ],
      },
    ],

    // disallow the use of the `__proto__` property
    'no-proto': 'error',

    // disallow assignment operators in `return` statements
    'no-return-assign': ['error', 'except-parens'],

    // disallow unnecessary `return await`
    'no-return-await': 'error',

    // disallow assignments where both sides are exactly the same
    'no-self-assign': ['error', { props: true }],

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow comma operators
    'no-sequences': 'error',

    // disallow throwing literals as exceptions
    'no-throw-literal': 'error',

    // disallow unused expressions
    'no-unused-expressions': [
      'error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // disallow redundant return statements
    'no-useless-return': 'error',

    // disallow `void` operators
    'no-void': 'error',

    // disallow specified warning terms in comments
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // require `var` declarations be placed at the top of their containing scope
    // 'vars-on-top': 'error',

    // require parentheses around immediate `function` invocations
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],

    // require or disallow "Yoda" conditions
    yoda: ['error', 'never'],

    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
  },
}
