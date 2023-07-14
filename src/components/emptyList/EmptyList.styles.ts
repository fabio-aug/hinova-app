import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../global/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fonts.subTitle,
    color: colors.dark,
  },
});
