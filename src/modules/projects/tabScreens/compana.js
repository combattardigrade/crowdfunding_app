import React, {memo} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Row from '../../../components/row';
import Line from '../../../components/line';
import Map from '../../../components/map';
import styles from '../style';
import {descriptionTxt} from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../constants/colors';
import { pie_chart_24px_outlined, vertical_align_center_24px_outlined,show_chart_24px_outlined } from '../../../constants/images';


const itemPadding = {
  paddingBottom:0,
  paddingTop:20
}

export default memo(() => {
  return (
    <View style={[styles.cene]}>
      <Text style={[styles.heading, styles.bold,{paddingTop:20}]}>Resumen</Text>
      <Text style={[styles.smTxt, {paddingVertical: 10}]}>
        {descriptionTxt}
      </Text>
      <Line marginBottom={25} marginTop={20} />

      <Text style={[styles.heading, styles.bold]}>Indicadores</Text>
      <Row marginTop={20}>
        <View style={styles.iconRow}>
        <Image source={pie_chart_24px_outlined}/>
          <Text style={styles.subtitle}>{' '} Financiamiento sobre costo</Text>
        </View>
        <Text style={[styles.subtitle, styles.bold]}>48%</Text>
      </Row>
      <Row marginTop={15}>
        <View style={styles.iconRow}>
          <Image source={vertical_align_center_24px_outlined}/>
          <Text style={styles.subtitle}>
            {' '}
            Valor de la garantía sobre el crédito
          </Text>
        </View>
        <Text style={[styles.subtitle, styles.bold]}>150%</Text>
      </Row>
      <Row marginTop={15}>
        <View style={styles.iconRow}>
        <Image source={show_chart_24px_outlined}/>
          <Text style={styles.subtitle}> Control de flujos</Text>
        </View>
        <Text style={[styles.subtitle, styles.bold]}>

          Entrega gasto por gasto
        </Text>
      </Row>

      <Line marginBottom={30} marginTop={30} />

      <Text style={[styles.heading, styles.bold]}>Puntos destacados</Text>
      <View style={[styles.iconRow,itemPadding]}>
        <MaterialIcons size={25} color={colors.green} name="done" />
        <Text style={[styles.subtitle, styles.bold]}>
          {' '}
          Punto destacado No. 1
        </Text>
      </View>
      <Text style={[styles.smTxt, {paddingVertical: 10}]}>
        {descriptionTxt}
      </Text>

      <View style={[styles.iconRow,itemPadding]}>
        <MaterialIcons size={25} color={colors.green} name="done" />
        <Text style={[styles.subtitle, styles.bold]}>
          {' '}
          Punto destacado No. 2
        </Text>
      </View>
      <Text style={[styles.smTxt, {paddingVertical: 10}]}>
        {descriptionTxt}
      </Text>

      <View style={[styles.iconRow,itemPadding]}>
        <MaterialIcons size={25} color={colors.green} name="done" />
        <Text style={[styles.subtitle, styles.bold]}>
          {' '}
          Punto destacado No. 3
        </Text>
      </View>
      <Text style={[styles.smTxt, {paddingVertical: 10}]}>
        {descriptionTxt}
      </Text>
      <Line marginBottom={30} marginTop={30} />

      <Text style={[styles.heading, styles.bold, {paddingBottom: 20}]}>
        Ubicación
      </Text>

      <Map height={300} />
    </View>
  );
});


