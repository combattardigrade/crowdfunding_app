import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  back: {
    paddingHorizontal: 20,
    paddingTop:15
  },
  forgetBtn: {
    width: '100%',
    alignItems: 'flex-end',
    paddingVertical: 16,
  },
  logo: {
    height: 70,
    marginTop: 10,
  },
  remove: {
    paddingBottom: 0,
  },
  title: {
    fontSize: 20,
    color: colors.textColor,
    fontWeight: 'bold',
    paddingBottom: 20,
    textAlign: 'center',
    lineHeight: 30,
    letterSpacing: 3,
  },
  bottomView: {
    paddingTop:20,
    flexGrow: 1,
    width: '100%',
  },
  main: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  heading: {
    paddingVertical: 30,
    width: '100%',
    alignItems: 'center',
  },
});
