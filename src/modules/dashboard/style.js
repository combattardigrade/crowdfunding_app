import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 10,
  },
  bg: {
    backgroundColor: colors.bg,
  },
});
