import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import Header from '../../components/header';
import ListItem from '../../components/listItem';
import styles from './style';
import {colors} from '../../constants/colors';
import {
  account_balance_24px,
  person_24px,
  portrait_24px,
  room_24px,
  verified_user_24px,
  wc_24px,
  zoom_in_24px,
  https_24px,
  mail_24px,
} from '../../constants/images';
const profile = [
  {
    img: person_24px,
    title: 'Datos personales',
    subtitle: 'Completado',
    blue: true,
  },
  {
    img: room_24px,
    title: 'Dirección',
    subtitle: 'Pendiente',
  },
  {
    img: account_balance_24px,
    title: 'Cuenta bancaria',
    subtitle: 'Pendiente',
  },
  {
    img: portrait_24px,
    title: 'Conocimiento inversionista',
    subtitle: 'Pendiente',
  },
  {
    img: wc_24px,
    title: 'Beneficiarios',
    subtitle: 'Pendiente',
  },
  {
    img: zoom_in_24px,
    title: 'Conocimiento de riesgos',
    subtitle: 'Pendiente',
  },
];

const seguridad = [
  {
    img: verified_user_24px,
    title: 'Contraseña',
    subtitle: 'Cambiar factor de autenticación principal',
    gray:true
  },
  {
    img: https_24px,
    title: 'NIP',
    subtitle: 'Cambiar factor de autenticación secundario',
    gray:true
  },
  {
    img: mail_24px,
    title: 'Email',
    subtitle: 'Cambiar correo electrónico',
    gray:true
  },
];

export default () => {
  const renderProfile = ({item}) => {
    return <ListItem {...item} />;
  };
  const renderItem = ({item}) => {
    return <ListItem {...item} />;
  };
  return (
    <ScrollView style={styles.bg}>
      <View style={styles.container}>
        <Header
          paddingHorizontal={20}
          backgroundColor={colors.white}
          title="Ajustes"
        />
        <Text style={styles.title}>Perfil</Text>
        <FlatList
          keyExtractor={(k) => k.title}
          data={profile}
          renderItem={renderProfile}
        />
        {/* <ListItem blue />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem /> */}
        <View style={styles.box} />
        <Text style={styles.title}>Seguridad</Text>
        <FlatList
          keyExtractor={(k,i) => i.toString()}
          data={seguridad}
          renderItem={renderItem}
        />
        <View style={styles.box} />
      </View>
    </ScrollView>
  );
};
