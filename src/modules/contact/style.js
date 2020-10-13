import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom:20
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 10,
  },
  bg: {
    backgroundColor: colors.white,
  },
  center: {
    alignItems: 'center',
    paddingTop: 50,
  },
  blue: {
    color: colors.primaryBlue,
  },
  txt: {
    marginTop: 10,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    width: 100,
    justifyContent: 'space-between',
  },
  icon: {},
});
