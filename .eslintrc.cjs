module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jest'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.tsx', '.ts', 'test.js'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.tsx'] },
    ],
  },
};
