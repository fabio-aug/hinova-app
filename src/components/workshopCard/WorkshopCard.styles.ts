import { StyleSheet } from 'react-native';
import { colors } from '../../global/Styles';

export const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    margin: 2,
    padding: 10,
    width: '99%',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.medium,
    backgroundColor: colors.bright,
  },
  image: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.medium,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    color: colors.dark,
  },
  subTitle: {
    color: colors.dark,
  },
});
