module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    indent: ['error', 2],
    'prettier/prettier': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-spacing': ['error', { before: false, after: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
  },
};
