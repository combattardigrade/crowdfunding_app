import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 10,
    paddingLeft: 20,
  },
  bg: {
    backgroundColor: colors.bg,
  },
  box:{
    backgroundColor:"white",
    width:'100%',
    height:35
  }
});
