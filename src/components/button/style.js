import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 18,
    backgroundColor: colors.primaryBlue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0,0,0,.6)',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    fontSize: 16,
    color: colors.white,
  },
});
