import { StyleSheet } from 'react-native';

import { colors } from '../../global/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.light,
  },
  imageContainer: {
    flex: 1,
    height: 160,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.medium,
  },
  image: {
    height: 155,
    width: '100%',
    shadowRadius: 5,
    borderRadius: 20,
    shadowOpacity: 1.0,
    shadowColor: colors.bright,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonContainer: {
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSize: {
    width: '70%',
  },
});
