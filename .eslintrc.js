module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [
        'xo',
        'xo-react',
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    globals: {
        'window': 'readonly',
        'document': 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true,
            jsx: true
        },
        ecmaVersion: '2017',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'eslint-plugin-import-helpers'
    ],
    rules: {
        indent: ['error', 4, {SwitchCase: 1}],
        quotes: ['error', 'single', {'avoidEscape': true}],
        'capitalized-comments': 0,
        'no-console': ['error', {allow: ['warn', 'error', 'debug', 'info']}],
        'no-useless-escape': 0,
        'generator-star-spacing': ['error', 'after'],
        'operator-linebreak': 0,
        'react/display-name': 0,
        'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
        'react/jsx-curly-brace-presence': [2, 'never'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-fragments': 0,
        'react/jsx-no-bind': [2, {
            'ignoreRefs': false,
            'allowArrowFunctions': true,
            'allowFunctions': false,
            'allowBind': false
        }],
        'react/jsx-sort-props': 0,
        'react/jsx-space-before-closing': 0,
        'react/jsx-tag-spacing': [2, {beforeSelfClosing: 'always'}],
        'react/require-default-props': 0,
        'react/no-danger': 0,
        'react/no-did-update-set-state': 0,
        'sort-imports': [
            2,
            {
                'ignoreCase': true,
                'ignoreDeclarationSort': true,
            }
        ],
        'import-helpers/order-imports': [
            2,
            {
                'newlines-between': 'always',
                groups: [
                    ['builtin', 'external', 'internal'],
                    [
                        '/^api/', '/^components/', '/^constants.js$/', '/^interfaces/',
                        '/^redux\//', '/^urls$/', '/^utils/'
                    ],
                    ['sibling', 'parent', 'index'],
                    ['/^design/']
                ],
                alphabetize: {order: 'asc', ignoreCase: true},
            },
        ],
    }
};
