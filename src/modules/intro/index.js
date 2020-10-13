import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../components/button';
import {colors} from '../../constants/colors';
import {bgImage, whileLogoImage} from '../../constants/images';
import {getSafeAreaStyle} from '../../utils';
import styles from './style';
export default ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      style={[styles.container, getSafeAreaStyle(insets)]}
      source={bgImage}>
      <Image resizeMode="contain" style={styles.logo} source={whileLogoImage} />
      <Text style={styles.title}>CROWDFUNDING INMOBILIARIO</Text>
      <View style={styles.bottomView}>
        <Button
          onPress={() => navigation.navigate('Login')}
          marginBottom={10}
          title="Iniciar sesión"
        />
        <Button
          onPress={() => navigation.navigate('Signup')}
          marginBottom={10}
          backgroundColor={colors.primaryDark}
          title="Crear cuenta"
        />
      </View>
    </ImageBackground>
  );
};
