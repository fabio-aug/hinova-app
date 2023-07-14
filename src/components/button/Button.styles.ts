import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../global/Styles';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    elevation: 2,
    width: '100%',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: colors.medium,
  },
  buttonOutlined: {
    borderWidth: 1,
    borderColor: colors.medium,
    backgroundColor: colors.white,
  },
  text: {
    lineHeight: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    fontSize: fonts.subTitle,
  },
  textPrimary: {
    color: colors.light,
  },
  textOutlined: {
    color: colors.medium,
  },
});
