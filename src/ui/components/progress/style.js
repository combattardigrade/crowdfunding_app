import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.borderColor,
    padding: 0,
  },
  highlight: {
    backgroundColor: colors.primaryBlue,
    alignItems: 'center',
    width: '40%',
    maxHeight: 20
  },
  title: {
    fontSize: 12,
    color: colors.white,
  },
});
