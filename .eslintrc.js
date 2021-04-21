module.exports = {
  parser: 'eslint-multiple-parsers',
  plugins: ['@typescript-eslint', '@emotion'],
  env: {
    node: true,
    jest: true,
    es6: true,
    browser: true
  },
  extends: [
    'standard',
    'standard-react',
    // 'plugin:prettier/recommended',
    // 'prettier/standard'
    // 'prettier/react',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint:recommended',
    'plugin:react/recommended'
    // 'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    parsers: [
      {
        test: '.*\\.js$',
        path: 'babel-eslint',
        options: {
          sourceType: 'module'
        }
      },
      {
        test: '.*\\.ts$',
        path: '@typescript-eslint/parser'
      }
    ],
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-fragments': 0,
    'react/no-unused-prop-types': 0,
    'import/export': 0,
    'react/display-name': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_'
      }
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error']
      }
    ]
  }
}
