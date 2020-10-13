import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../../components/button';
import TextInput from '../../../components/input';
import {colors} from '../../../constants/colors';
import {
  backArrowIcon,
  bgImage,
  whileLogoImage,
} from '../../../constants/images';
import {getSafeAreaStyle} from '../../../utils';
import styles from './style';

export default ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      style={[styles.container, getSafeAreaStyle(insets), styles.remove]}
      source={bgImage}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.back}>
        <Image source={backArrowIcon} />
      </TouchableOpacity>
      <View style={styles.heading}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={whileLogoImage}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <View style={styles.bottomView}>
          <TextInput
            marginBottom={18}
            placeholder="Email"
            title="Email"
            required
          />

          <TextInput
            marginBottom={10}
            placeholder="Contraseña"
            title="Contraseña"
            required
          />
          <TouchableOpacity style={styles.forgetBtn}>
            <Text>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => navigation.navigate('BottomTab')}
          marginBottom={10}
          title="Iniciar sesión"
        />
      </View>
    </ImageBackground>
  );
};
