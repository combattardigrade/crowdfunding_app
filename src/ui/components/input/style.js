import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 13,
    color: colors.textColor,
    paddingBottom: 7,
  },
  input: {
    width: '100%',
    borderColor: colors.borderColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  required: {
    color: 'red',
  },
  lightInput: {
    borderColor: colors.white,
    color: colors.white,
  },
});
