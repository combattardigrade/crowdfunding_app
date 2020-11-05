import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBg: {
    width: '100%',
    height: 300,
  },
  iconRow:{
    flexDirection:'row',
    alignItems:'center'
  },
  back: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
  },
  fullImage: {
    width: '100%',
    height: 300,
  },
  blue: {
    color: colors.primaryBlue,
  },
  center: {
    alignItems: 'center',
  },
  box: {
    width: '100%',
    padding: 10,
    backgroundColor: colors.borderColor,
    borderRadius: 5,
    marginBottom: 20,
  },
  tabView: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 2,
    color: colors.white,
  },
  rightItem: {
    width: 40,
  },
  bold: {
    fontWeight: 'bold',
  },
  small: {
    fontSize: 9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingRight: 6,
  },
  bg: {
    backgroundColor: colors.white,
  },
  main: {
    top: -50,
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 100,
  },
  lgTxt: {
    fontSize: 20,
    fontWeight: '700',
  },
  scene: {
    flex: 1,
    // height: 1200,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 15,
  },
  smTxt: {
    fontSize: 12,
    opacity: 0.9,
  },
  descTxt: {
    fontSize: 12,
    lineHeight: 20,
    paddingBottom: 20,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  inActiveindicator: {
    // borderBottomColor: colors.primaryDark,
    // borderBottomWidth: 1
  },
  indicator: {
    borderBottomColor: colors.primaryDark,
    borderBottomWidth: 2,
  },
  labelStyle: {
    fontSize: 10,
    textTransform: 'capitalize',
  },
});
