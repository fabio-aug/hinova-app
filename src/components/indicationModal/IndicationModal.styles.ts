import { StyleSheet } from 'react-native';
import { colors } from '../../global/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.black}40`,
  },
  scroll: {
    marginTop: 60,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    width: '100%',
    paddingTop: 10,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottomBottom: 5,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
