module.exports = {
  root: true,

  plugins: [ 'cypress' ],

  env: {
    'browser': true,
    'es6': true,
    'node': true,
    'jest': true
  },

  'extends': [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:vue/vue3-strongly-recommended'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-extra-semi': 'error',

    'semi': 'off',

    'indent': ['error', 2],

    'arrow-parens': 'off',
    'no-confusing-arrow': 'off',

    'no-unused-expressions': 'off',
    'dot-notation': 'off',
    'no-underscore-dangle': 'off',

    'no-return-assign': 'off',

    'comma-style': ['error', 'last', { 'exceptions': { 'ObjectExpression': true } }],

    'no-prototype-builtins': 'off',

    'camelcase': 'off',

    'wrap-iife': 'off',

    'curly': 'off',

    'object-curly-newline': 'off',

    'eol-last': 'off',

    'no-param-reassign': 'off',

    'key-spacing': 'off',

    'quotes': ['error', 'single'],

    'vue/valid-v-for': 'off',

    'comma-dangle': 'off',

    'no-nested-ternary': 'off',

    'import/no-extraneous-dependencies': 'off',

    'import/extensions': 'off',

    'array-bracket-spacing': 'off',

    'no-shadow': 'off',

    'no-multi-spaces': 'off',

    'function-paren-newline': 'off',

    'arrow-body-style': 'off',

    'import/prefer-default-export': 'off',

    'consistent-return': 'off',

    'object-shorthand': 'off',

    'func-names': 'off',

    'quote-props': 'off',

    'vue/attributes-order': [2, {
      'order': [
        'DEFINITION',
        'GLOBAL',
        'UNIQUE',
        'CONDITIONALS',
        'LIST_RENDERING',
        'OTHER_ATTR',
        'TWO_WAY_BINDING',
        'EVENTS',


        // 'BINDING',
        // 'CONTENT',
        // 'RENDER_MODIFIERS',
        // 'OTHER_DIRECTIVES',
      ]
    }],

    'vue/order-in-components': ['error', {
      'order': [
        'name',
        'functional',
        ['components', 'directives', 'filters'],
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'setup',
        'data',
        'watch',
        'errorCaptured',
        'renderError',
        'emits',
        'beforeCreate',
        'created',
        'beforeMount',
        'mounted',
        'beforeUpdate',
        'updated',
        'computed',
        'methods',
        // 'LIFECYCLE_HOOKS',
        ['template', 'render'],
        'beforeUnmount',
        'unmounted'
      ]
    }],
  },

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  }
}
