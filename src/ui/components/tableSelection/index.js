import React, { memo } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Row from '../row';
import styles from './style';

// Libraries
import moment from 'moment'
import currencyFormatter from 'currency-formatter'

export default memo(({ project }) => {
  return (
    <View style={styles.box}>
      <Row marginBottom={4}>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Instrumento:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> {project?.instrumento}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Mínimo para invertir:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> {currencyFormatter.format(project.inversionMinima, { code: 'USD' })}</Text>
        </View>
      </Row>
      <Row marginBottom={4}>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Plazo:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> {project?.plazo} meses</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Comisión:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> {project?.comision}% anual</Text>
        </View>
      </Row>
      <Row marginBottom={4}>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Pago de intereses:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> {project?.pagoIntereses} meses</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Garantía:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> {project?.garantia}</Text>
        </View>
      </Row>
      <Row marginBottom={4}>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            Tasa anual fija:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> {currencyFormatter.format(project.tasaAnualFija, { code: 'USD' })}%</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.smTxt, styles.bold, styles.small]}>
            {' '}
            TIR anual estimada:
          </Text>
          <Text style={[styles.smTxt, styles.small]}> {currencyFormatter.format(project.tirAnualEstimada, { code: 'USD' })}%</Text>
        </View>
      </Row>
    </View>
  );
});
