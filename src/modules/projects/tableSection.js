import React, {memo} from 'react';
import {
  View,
  Text,
} from 'react-native';
import Row from '../../components/row';
import styles from './style';

export default memo(() => {
  return (
    <View style={styles.box}>
      <Row marginBottom={4}>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Instrumento:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> Deuda</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Mínimo para invertir:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> $50,000</Text>
        </View>
      </Row>
      <Row marginBottom={4}>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Plazo:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> 12 meses</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Comisión:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> 2.5% anual</Text>
        </View>
      </Row>
      <Row marginBottom={4}>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Pago de intereses:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> Anual</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Garantía:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> Hipotecaria</Text>
        </View>
      </Row>
      <Row marginBottom={4}>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Tasa anual fija:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> 15%</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            TIR anual estimada:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> 12.4%</Text>
        </View>
      </Row>
    </View>
  );
});
