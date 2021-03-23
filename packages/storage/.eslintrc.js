module.exports = {
  env: {
    es2020: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
