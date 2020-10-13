import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  logo: {
    height: 70,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    width: 230,
    textAlign: 'center',
    lineHeight: 30,
    letterSpacing: 3,
  },
  bottomView: {
    width: '100%',
    paddingBottom:20,
  },
});
