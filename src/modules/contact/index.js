import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Header from '../../components/header';
import {contactImage} from '../../constants/images';
import Button from '../../components/button';
import Line from '../../components/line';
import styles from './style';
import SocialIcon from './socialIcon';
export default () => {
  return (
    <ScrollView style={styles.bg}>
      <Header paddingHorizontal={20} title="Contacto" />
      <Line marginBottom={10}/>
      <View style={styles.container}>
        <Text style={styles.title}>¿Necesitas ayuda?</Text>
        <Text style={styles.subtitle}>Estamos aquí para ayudarte</Text>
        <View style={styles.center}>
          <Image source={contactImage} />

          <Button
            marginBottom={50}
            marginTop={50}
            title="Contactar en WhatsApp"
          />
        </View>
        <Line marginBottom={20}/>

        <Text>
          Para respuestas inmediatas visita nuestra sección de{' '}
          <Text style={styles.blue}>Preguntas Frecuentes</Text>
        </Text>

        <Text style={[styles.txt,{paddingTop:10}]}>Conecta con nosotros:</Text>

        <SocialIcon />
      </View>
    </ScrollView>
  );
};
