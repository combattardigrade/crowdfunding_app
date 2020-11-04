import React, {memo} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import {colors} from '../../constants/colors';
const img =
  'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  
export default memo(({title}) => {
  return (
    <View style={[styles.container]}>
      <Image style={styles.img} source={{uri: img}} />
      <View>
        <Text style={styles.title}>Desarrollo Alfa</Text>
        <View style={[styles.row]}>
          <View style={styles.column}>
            <Text style={styles.subtitle}>Tasa Anual</Text>
            <Text style={styles.smallTxt}>15%</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.subtitle}>Pagos recibidos</Text>
            <Text style={styles.smallTxt}>$54,000</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.subtitle}>Fecha inicio</Text>
            <Text style={styles.smallTxt}>Fecha inicio</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.subtitle}>Estado</Text>
            <Text
              style={[
                styles.smallTxt,
                {color: colors.primaryBlue, fontWeight: 'bold'},
              ]}>
              Activo
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.subtitle}>Plazo</Text>
            <Text style={styles.smallTxt}>24 meses</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.subtitle}>Pagos pendientes</Text>
            <Text style={styles.smallTxt}>$54,000</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.subtitle}>Fecha termino</Text>
            <Text style={styles.smallTxt}>01/11/21</Text>
          </View>
        </View>
      </View>
    </View>
  );
});
