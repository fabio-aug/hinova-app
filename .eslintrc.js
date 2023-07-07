module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    ],
    'prettier/prettier': 0,
  },
};
