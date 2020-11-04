import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
export default memo(({title, backgroundColor, paddingHorizontal}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View
      style={[
        styles.container,
        backgroundColor && {backgroundColor},
        paddingHorizontal && {paddingHorizontal},

        {paddingTop: insets.top + 20},
      ]}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon size={35} name="md-menu" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>

      <View />
    </View>
  );
});
