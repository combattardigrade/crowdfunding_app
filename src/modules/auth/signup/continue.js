import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '../../../components/button';
import TextInput from '../../../components/input';
import {colors} from '../../../constants/colors';
import {
  backArrowIcon,
  bgImage,
  kycImage,
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.main}>
        <ScrollView style={{width: '100%'}}>
          <Text style={styles.title}>Ingresa tu Nombre</Text>
          <View style={styles.kycView}>
            <Image source={kycImage} />
          </View>

          <View style={styles.bottomView}>
            <TextInput
              marginBottom={18}
              placeholder="Nombre(s)"
              title="Nombre(s)"
              required
            />

            <TextInput
              marginBottom={18}
              placeholder="Apellido Paterno"
              title="Apellido Paterno"
              required
            />

            <TextInput
              marginBottom={20}
              placeholder="Apellido Paterno"
              title="Apellido Paterno"
              required
            />
          </View>
        </ScrollView>
          <Button
            onPress={() => navigation.navigate('BottomTab')}
            // marginBottom={10}
            title="Continuar"
          />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
