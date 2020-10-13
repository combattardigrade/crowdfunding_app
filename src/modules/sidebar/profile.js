import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style';
import {userIcon} from '../../constants/images';

export default memo(() => {
  return (
    <View style={styles.profileCont}>
      <View style={styles.avatar}>
        <Image source={userIcon} style={styles.avatarIcon} />
      </View>
      <View style={styles.user}>
        <Text style={styles.userName}>Juan Pérez</Text>
        <Text style={styles.bio}>Verificación completada</Text>
      </View>
    </View>
  );
});
