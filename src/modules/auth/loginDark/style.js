import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.primaryDark,
    justifyContent: 'space-between',
  },
  logo: {
    height: 70,
    marginTop: 10,
  },
  title: {
    color: colors.white,
  },
  bottomView: {
    width: '100%',
  },
  main: {
    width: '100%',
  },
});
