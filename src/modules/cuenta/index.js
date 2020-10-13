import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../../components/header';
import PortfolioItem from '../../components/portfolioItem';
import Line from '../../components/line';
import Row from '../../components/row';
import styles from './style';

export default () => {
  return (
    <ScrollView style={styles.bg}>
      <View style={styles.container}>
        <Header title="Cuenta" />
        <Line />
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txt}>Resumen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.subtitle}>Transacciones</Text>
          </TouchableOpacity>
        </View>
        <Line />

        <View style={styles.center}>
          <Text style={styles.subtitle}>VALOR PORTAFOLIO</Text>
          <Text style={[styles.txt, styles.blue, styles.lgTxt]}>$100,000</Text>
          <Row marginBottom={20} justifyContent="space-around">
            <View style={[styles.center, {width: 130}]}>
              <Text style={[styles.txt, styles.blue]}>$500</Text>
              <Text style={[styles.smTxt]}>Ganancias Diarias Estimadas</Text>
            </View>
            <View style={[styles.center, {width: 130}]}>
              <Text style={[styles.txt, styles.blue]}>$5,000</Text>
              <Text style={[styles.smTxt]}>Ganancias Totales Estimadas</Text>
            </View>
          </Row>
        </View>
        <Line marginBottom={25} />

        <Text style={styles.txt}>Portafolio</Text>
        <Line  marginTop={15}/>
        <PortfolioItem />
        <Line />

        <PortfolioItem />
        <Line />

        <PortfolioItem />
        <Line />

        <PortfolioItem />
        <Line />
      </View>
    </ScrollView>
  );
};
