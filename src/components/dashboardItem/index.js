import React, {memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import Row from '../row';
import Line from '../line';
import {useNavigation} from '@react-navigation/native';
import Progress from '../progress';
const img =
  'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

export default memo(({percentage}) => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.navigate('Projects');
  };
  return (
    <TouchableOpacity onPress={openDrawer} style={[styles.container]}>
      <Row paddingVertical={7} paddingHorizontal={13}>
        <View>
          <Text style={styles.title}>Desarrollo Alfa</Text>
          <Text style={styles.subtitle}>Por Desarrollador 1</Text>
        </View>
        <Text style={styles.normalTxt}>Quedan 39 días</Text>
      </Row>
      <Progress title="Deuda" />
      <Image style={styles.img} source={{uri: img}} />
      <Progress percentage={percentage} />
      <Row paddingVertical={7} paddingHorizontal={13}>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>$1.5MM recaudado</Text>
        </View>
        <View style={styles.flex}>

        <Text style={styles.smallTxt}>Min $4.5MM</Text>
        </View>

        <View style={styles.flex}>

        <Text style={styles.smallTxt}>Max $4.5MM</Text>
        </View>

      </Row>
      <Line />
      <Row paddingVertical={20} paddingHorizontal={13}>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>Tasa anual fija</Text>
          <Text style={[styles.title,styles.lowerTxt]}>12.32%</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>Mín de inversión</Text>
          <Text style={[styles.title,styles.lowerTxt]}>$54,000 MXN</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>Plazo</Text>
          <Text style={[styles.title,styles.lowerTxt]}>12 meses</Text>
        </View>
      </Row>

      <View />
    </TouchableOpacity>
  );
});
