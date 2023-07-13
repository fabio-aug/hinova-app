import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../global/Styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    elevation: 2,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: colors.medium,
  },
  text: {
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: colors.light,
    fontSize: fonts.subTitle,
  },
});
