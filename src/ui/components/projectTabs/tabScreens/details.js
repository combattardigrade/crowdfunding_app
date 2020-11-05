import React, { memo } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Row from '../../row';
import Line from '../../line';
const descriptionTxt = 'test'
import styles from '../style';
import Octicons from 'react-native-vector-icons/Octicons';
import { colors } from '../../../../constants/colors';
import { blackLogoImage } from '../../../../constants/images';

export default memo(() => {
  return (
    <View style={[styles.scene]}>
      <Text style={[styles.heading, styles.bold]}>Estructura de capital</Text>
      <Text style={[styles.descTxt]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>

      <Row marginBottom={15}>
        <View style={styles.row}>
          <Text>
            <Octicons size={20} color={colors.green} name="primitive-dot" />
            <Text style={styles.subtitle}>{'  '} Deuda Preferente</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.small]}>$50,000</Text>
          <Text style={[styles.smTxt, styles.small]}>20%</Text>
        </View>
      </Row>

      <Row marginBottom={15}>
        <View style={styles.row}>
          <Text>
            <Octicons size={20} color={colors.yellow} name="primitive-dot" />
            <Text style={styles.subtitle}>{'  '} Deuda Junior</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.small]}>$50,000</Text>
          <Text style={[styles.smTxt, styles.small]}>20%</Text>
        </View>
      </Row>

      <Row marginBottom={15}>
        <View style={styles.row}>
          <Text>
            <Octicons size={20} color={colors.orange} name="primitive-dot" />
            <Text style={styles.subtitle}>{'  '} Capital desarrollador</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.small]}>$50,000</Text>
          <Text style={[styles.smTxt, styles.small]}>20%</Text>
        </View>
      </Row>

      <Row marginBottom={15}>
        <View style={styles.row}>
          <Text>
            <Octicons
              size={20}
              color={colors.primaryPink}
              name="primitive-dot"
            />
            <Text style={styles.subtitle}>{'  '} Preventa</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.small]}>$50,000</Text>
          <Text style={[styles.smTxt, styles.small]}>20%</Text>
        </View>
      </Row>

      <Row marginBottom={10}>
        <View style={styles.row}>
          <Text>
            <Text style={styles.subtitle}>{'    '} Total</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.small, styles.bold]}>$50,000</Text>
          <Text style={[styles.smTxt, styles.small, styles.bold]}>100%</Text>
        </View>
      </Row>

      <Line marginTop={20} marginBottom={30} />
      <Text style={[styles.heading, styles.bold]}>
        Detalles del presupuesto
      </Text>
      <Text style={[styles.smTxt, { paddingVertical: 10 }]}>
        {descriptionTxt}
      </Text>
      <Line marginTop={30} marginBottom={30} />

      <Text style={[styles.heading, styles.bold]}>Documentos</Text>

      <Row marginTop={20}>
        <Text style={[styles.smTxt, { opacity: .5 }]}>Documento</Text>
        <Text style={[styles.smTxt, { opacity: .5, width: 100 }]}>Ver</Text>
      </Row>
      <Line marginTop={8} />

      <Row marginTop={20} marginBottom={10}>
        <Text style={[styles.subtitle]}>Documento 1</Text>
        <Text style={[styles.subtitle, styles.blue]}>Ver documento</Text>
      </Row>
      <Line marginBottom={20} />
      <Row marginBottom={10}>
        <Text style={[styles.subtitle]}>Documento 2</Text>
        <Text style={[styles.subtitle, styles.blue]}>Ver documento</Text>
      </Row>
      <Line marginBottom={20} />
      <Row marginBottom={10}>
        <Text style={[styles.subtitle]}>Documento 2</Text>
        <Text style={[styles.subtitle, styles.blue]}>Ver documento</Text>
      </Row>
      <Line marginBottom={40} />

      <Text style={[styles.heading, styles.bold]}>
        Responsables del proyecto
      </Text>
      <Row marginTop={20}>
        <Text style={[styles.smTxt, { opacity: .5 }]}>Nombre</Text>
        <Text style={[styles.smTxt, { opacity: .5, width: 133, textAlign: 'center' }]}>Cargo</Text>
      </Row>
      <Line marginTop={8} />

      <Row marginTop={20} marginBottom={10}>
        <Text style={[styles.subtitle]}>Juan Pérez</Text>
        <Text style={[styles.subtitle]}>Representante legal</Text>
      </Row>
      <Line marginBottom={20} />
      <Row marginBottom={10}>
        <Text style={[styles.subtitle]}>Juan Pérez</Text>
        <Text style={[styles.subtitle]}>Representante legal</Text>
      </Row>
      <Line marginBottom={35} />
      <Text style={[styles.heading, styles.bold]}>Sobre el desarrollador</Text>
      <Image style={{ marginVertical: 35 }} source={blackLogoImage} />
      <Text style={[styles.heading, styles.bold]}>Fibra Cero</Text>
      <Text style={[styles.descTxt, { paddingBottom: 0 }]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </View>
  );
});
