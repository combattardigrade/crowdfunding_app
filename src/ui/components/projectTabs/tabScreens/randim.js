import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Row from '../../row';
import Line from '../../line';
import Slider from '../../slider';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';
// import Slider from '@react-native-community/slider';
import { colors } from '../../../../constants/colors';


export default memo(() => {
  return (
    <View style={[styles.scene]}>
      <Text style={[styles.heading, styles.bold]}>Calculadora</Text>
      <View style={{ paddingLeft: 10, paddingTop: 5, paddingBottom: 10 }}>
        <Text style={[styles.subtitle, { paddingTop: 10 }]}>1. Monto a</Text>
        <Text style={[styles.subtitle]}> invertir</Text>
      </View>
      <Text style={[styles.subtitle, { textAlign: 'center' }]}>$80,000</Text>
      <Slider
        style={{ width: '100%', height: 50 }}
        minimumValue={30}
        maximumValue={100}
        minimumTrackTintColor={colors.primaryDark}
        maximumTrackTintColor={colors.borderColor}
      />
      {/* <RangeSlider
        style={{width: '100%', height: 80}}
        gravity={'center'}
     
        
        selectionColor="#3df"
        blankColor="#f618"
        onValueChanged={(low, high, fromUser) => {
          
        }}
      /> */}

      <Row marginBottom={30}>
        <View style={styles.center}>
          <Text style={[styles.subtitle, { fontSize: 10 }]}>$50,000</Text>
          <Text style={[styles.subtitle, { fontSize: 10 }]}>0</Text>
        </View>

        <View style={styles.center}>
          <Text style={[styles.subtitle, { fontSize: 10 }]}>$200,000</Text>
          <Text style={[styles.subtitle, { fontSize: 10 }]}>0</Text>
        </View>
      </Row>
      <Text style={[styles.subtitle]}>
        2. Plazo estimado para fines del cálculo
      </Text>
      <Text
        style={[styles.subtitle, { textAlign: 'center', paddingVertical: 16 }]}>
        6 Meses
      </Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={colors.primaryDark}
        maximumTrackTintColor={colors.borderColor}
      />
      <Row marginBottom={30}>
        <View style={styles.center}>
          <Text style={[styles.subtitle, { fontSize: 10 }]}>3</Text>
          <Text style={[styles.subtitle, { fontSize: 10 }]}>Meses</Text>
        </View>
        <View style={styles.center}>
          <Text style={[styles.subtitle, { fontSize: 10 }]}>3</Text>
          <Text style={[styles.subtitle, { fontSize: 10 }]}>Meses</Text>
        </View>
      </Row>
      <Line marginTop={10} marginBottom={30} />
      <Row marginBottom={10}>
        <Text style={[styles.subtitle]}>Inversión total</Text>
        <Text style={[styles.subtitle]}>$200,000</Text>
      </Row>
      <Line marginBottom={20} />
      <Row marginBottom={10}>
        <Text style={[styles.subtitle]}>Inversión total</Text>
        <Text style={[styles.subtitle]}>$200,000</Text>
      </Row>
      <Line marginBottom={20} />
      <Row marginBottom={10}>
        <Text style={[styles.subtitle, styles.bold]}>Inversión total</Text>
        <Text style={[styles.subtitle, styles.bold]}>$200,000</Text>
      </Row>
      <Line marginBottom={30} />
    </View>
  );
});
