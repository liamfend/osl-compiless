module.exports = {
  env: {

    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    version: 'detect',
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
  }
}
