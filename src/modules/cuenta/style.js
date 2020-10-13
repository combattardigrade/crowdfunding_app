import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  btn: {
    borderBottomWidth: 1,
    marginHorizontal: 22,
    paddingVertical: 15,
  },
  lgTxt: {
    fontSize: 30,
    paddingVertical: 10,
  },
  subtitle: {
    fontSize: 14,
  },
  smTxt: {
    fontSize: 12,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 10,
  },
  bg: {
    backgroundColor:"#E5E5E5",
  },
  center: {
    alignItems: 'center',
    paddingTop: 30,
  },
  blue: {
    color: colors.primaryBlue,
  },
  txt: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    width: 100,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
