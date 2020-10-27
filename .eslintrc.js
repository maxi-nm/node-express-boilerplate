module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    // 'plugin:@typescript-eslint', // add prettier rules to eslint
    // 'plugin:prettier/recommended', // add the plugin that integrates eslint with prettier
    // 'prettier/@typescript-eslint',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'babel',
    'import',
    'prettier',
    'promise',
    'node',
  ],
  rules: {
    semi: 2,
    'comma-dangle': 'always',
  },
};
