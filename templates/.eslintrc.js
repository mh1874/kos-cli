module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  globals: {
    window: true,
    require: true,
  },
  extends: 'eslint-config-airbnb',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    },
  },
  rules: {
    'no-useless-constructor': 0,
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/jsx-closing-tag-location': 0,
    "react/forbid-prop-types": 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": 0,
    'linebreak-style': ['error', 'windows',],
    'max-len': 0,
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          '@/*',
        ],
      },
    ],
    'import/extensions': 0,
    'no-console': 'off',
  },
};
