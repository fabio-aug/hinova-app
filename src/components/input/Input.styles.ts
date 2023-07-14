import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/Styles';

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 10,
    justifyContent: 'center',
  },
  label: {
    marginBottom: 3,
    color: colors.dark,
    fontWeight: 'bold',
    fontSize: fonts.description,
  },
  input: {
    height: 35,
    padding: 10,
    borderRadius: 5,
    color: colors.dark,
    backgroundColor: colors.bright,
  },
});
