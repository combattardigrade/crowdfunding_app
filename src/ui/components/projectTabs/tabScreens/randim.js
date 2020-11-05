import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { View, Text } from 'react-native';
import Row from '../../row';
import Line from '../../line';
import Slider from '../../slider';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';
// import Slider from '@react-native-community/slider';
import { colors } from '../../../../constants/colors';

import currencyFormatter from 'currency-formatter'

class Rendimiento extends Component {

  state = {
    investmentAmount: 100000,
    months: 6
  }

  render() {
    const { investmentAmount, months } = this.state
    const { projects, selectedProject } = this.props
    const project = projects[selectedProject]

    const rendimientoEstimado = months / 12 * parseFloat(project?.rendimientoAnualEstimado) / 100 * investmentAmount
    const ingresosTotales = investmentAmount + rendimientoEstimado

    return (
      <View style={[styles.scene]}>
        <Text style={[styles.heading, styles.bold]}>Calculadora</Text>
        <View style={{ paddingLeft: 10, paddingTop: 5, paddingBottom: 10 }}>
          <Text style={[styles.subtitle, { paddingTop: 10 }]}>1. Monto a invertir</Text>

        </View>
        <Text style={[styles.subtitle, { textAlign: 'center' }]}>{currencyFormatter.format(investmentAmount, { code: 'USD' })}</Text>
        <Slider
          style={{ width: '100%', height: 50 }}
          minimumValue={parseInt(project?.inversionMinima)}
          maximumValue={200000}
          minimumTrackTintColor={colors.primaryDark}
          maximumTrackTintColor={colors.borderColor}
          onValueChange={value => this.setState({ investmentAmount: value })}
          step={5000}
          value={this.state.investmentAmount}
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
            <Text style={[styles.subtitle, { fontSize: 10 }]}>{currencyFormatter.format(project?.inversionMinima, { code: 'USD' })}</Text>
          </View>
          <View style={styles.center}>
            <Text style={[styles.subtitle, { fontSize: 10 }]}>$200,000</Text>
          </View>
        </Row>
        <Text style={[styles.subtitle]}>
          2. Plazo estimado para fines del cálculo
        </Text>
        <Text
          style={[styles.subtitle, { textAlign: 'center', paddingVertical: 16 }]}>
          {months} Meses
        </Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={3}
          maximumValue={12}
          minimumTrackTintColor={colors.primaryDark}
          maximumTrackTintColor={colors.borderColor}
          onValueChange={value => this.setState({ months: value })}
          step={1}
          value={this.state.investmentAmount}
        />
        <Row marginBottom={30}>
          <View style={styles.center}>
            <Text style={[styles.subtitle, { fontSize: 10 }]}>3 Meses</Text>
          </View>
          <View style={styles.center}>
            <Text style={[styles.subtitle, { fontSize: 10 }]}>{project?.plazo} Meses</Text>
          </View>
        </Row>
        <Line marginTop={10} marginBottom={30} />
        <Row marginBottom={10}>
          <Text style={[styles.subtitle]}>Inversión total</Text>
          <Text style={[styles.subtitle]}>{currencyFormatter.format(investmentAmount, { code: 'USD' })}</Text>
        </Row>
        <Line marginBottom={20} />
        <Row marginBottom={10}>
          <Text style={[styles.subtitle]}>Tiempo total</Text>
          <Text style={[styles.subtitle]}>{months}</Text>
        </Row>
        <Line marginBottom={20} />
        <Row marginBottom={10}>
          <Text style={[styles.subtitle, styles.bold]}>Rendimiento estimado</Text>
          <Text style={[styles.subtitle, styles.bold]}>{currencyFormatter.format(rendimientoEstimado, { code: 'USD' })}</Text>
        </Row>
        <Line marginBottom={30} />
      </View>
    );
  }
}

function mapStateToProps({ projects, shared }) {
  return {
    selectedProject: shared && shared.selectedProject,
    projects
  }
}

export default connect(mapStateToProps)(Rendimiento)