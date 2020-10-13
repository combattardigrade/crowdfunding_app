import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../constants/colors';
export default memo(() => {
  return (
    <View style={styles.iconView}>
      <Icon size={25} color={colors.primaryBlue} name="facebook-square" />
      <Icon size={25} color={colors.primaryBlue} name="twitter-square" />
      <Icon size={25} color={colors.primaryBlue} name="linkedin-square" />
    </View>
  );
});
