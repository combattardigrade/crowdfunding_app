import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
      <View
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.main}>
        <ScrollView style={{width: '100%'}}>
          <Text style={styles.title}>Abrir Cuenta</Text>
          <View style={styles.bottomView}>
            <TextInput
              marginBottom={18}
              placeholder="Nombre(s)"
              title="Email"
              required
            />

            <TextInput
              marginBottom={18}
              placeholder="Apellido Paterno"
              title="Contraseña"
              required
            />

            <TextInput
              marginBottom={30}
              placeholder="Apellido Paterno"
              title="Repetir contraseña"
              required
            />
          </View>
        </ScrollView>
          <Button
            onPress={() => navigation.navigate('Continue')}
            // marginBottom={10}
            title="Abrir Cuenta"
          />
      </View>
    </ImageBackground>
  );
};
