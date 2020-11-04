import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors'
export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,.1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 10,
    marginBottom: 10,
  },
  lowerTxt: {
    fontSize: 14
  },
  flex: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 11,
    opacity: 0.6,
  },
  normalTxt: {
    fontSize: 16,
  },
  smallTxt: {
    fontSize: 10,

  },
  img: {
    width: '100%',
    height: 130
  }
});
