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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottomBottom: 5,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
  },
  buttonSize: {
    flex: 0.45,
  },
  observationInput: {
    height: 70,
  },
});
