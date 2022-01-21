module.exports = {
  // root: true,

  plugins: [ 'cypress' ],

  env: {
    'browser': true,
    'es6': true,
    'node': true,
    'jest': true
  },

  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:cypress/recommended'
  ],

  rules: {
    'no-extra-semi': 'error',

    'semi': ['error', 'never'],

    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    }],

    'space-infix-ops': 'error',

    'space-before-blocks': 'error',

    'object-curly-spacing': ['error', 'always'],

    'block-spacing': 'error',

    'key-spacing': ['error', { 'afterColon': true }],

    'keyword-spacing': ['error', { 'after': true, 'before': true }],

    'template-curly-spacing': 'off',

    'vue/require-default-prop': 'off',

    'indent': ['error', 2, {
      'ignoredNodes': ['TemplateLiteral']
    }],

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

    'no-unused-vars': 'off',

    'func-names': 'off',

    'quote-props': 'off',

    'vue/max-attributes-per-line': 'off',

    'vue/singleline-html-element-content-newline': 'off',

    'vue/no-v-html': 'off',

    'vue/attributes-order': [2, {
      'order': [
        'DEFINITION',
        'GLOBAL',
        'CONDITIONALS',
        'LIST_RENDERING',
        'UNIQUE',
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
    }]
  },

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  }
}
