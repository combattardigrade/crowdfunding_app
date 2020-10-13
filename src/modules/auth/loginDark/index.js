import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../../components/button';
import TextInput from '../../../components/input';
import {colors} from '../../../constants/colors';
import {bgImage, whileLogoImage} from '../../../constants/images';
import {getSafeAreaStyle} from '../../../utils';
import styles from './style';
export default () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, getSafeAreaStyle(insets)]} source={bgImage}>
      <Image resizeMode="contain" style={styles.logo} source={whileLogoImage} />
      <View style={styles.main}>
        <TextInput placeholder="Correo electrónico" light />
        <TextInput marginBottom={16} placeholder="Contraseña" light />
        <TouchableOpacity style={styles.forgetBtn}>
          <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <Button
          marginBottom={10}
          backgroundColor={colors.primaryPink}
          title="Login"
        />
      </View>
    </View>
  );
};
