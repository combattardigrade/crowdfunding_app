import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: colors.white,
    borderRadius: 10,
    
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 9,
    opacity: 0.9,
  },
  normalTxt: {
    fontSize: 16,
  },
  smallTxt: {
    fontSize: 12,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '99%',
  },
  column: {
    paddingRight: 5,
  },
});
