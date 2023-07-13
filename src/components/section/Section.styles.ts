import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../global/Styles';

export const styles = StyleSheet.create({
  sectionContainer: {
    padding: 5,
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: colors.dark,
    textAlign: 'justify',
    fontSize: fonts.title,
  },
  sectionDescription: {
    color: colors.dark,
    textAlign: 'justify',
    fontSize: fonts.description,
  },
});
