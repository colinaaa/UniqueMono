module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './packages/**/tsconfig.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
  settings: {
    'import/internal-regex': ['^@uniqs/'],
  },
  ignorePatterns: [
    'scripts',
    'coverage',
    '.prettierrc.js',
    '**/rollup.config.js',
    '**/.eslintrc.js',
    '**/jest.config.js',
    '**/dist',
  ],
};
