import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  Image
} from 'react-native';
import Row from '../../row';
import Line from '../../line';
import Map from '../../map';
import styles from '../style';
const descriptionTxt = 'test'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../../constants/colors';
import { pie_chart_24px_outlined, vertical_align_center_24px_outlined, show_chart_24px_outlined } from '../../../../constants/images';


const itemPadding = {
  paddingBottom: 0,
  paddingTop: 20
}

class Campana extends Component {
  render() {
    const { projects, selectedProject } = this.props
    const project = projects[selectedProject]
    console.log(project)
    return (
      <View style={[styles.cene]} >
        <Text style={[styles.heading, styles.bold, { paddingTop: 20 }]}>Resumen</Text>
        <Text style={[styles.smTxt, { paddingVertical: 10 }]}>
          {descriptionTxt}
        </Text>
        <Line marginBottom={25} marginTop={20} />

        <Text style={[styles.heading, styles.bold]}>Indicadores</Text>
        <Row marginTop={20}>
          <View style={styles.iconRow}>
            <Image source={pie_chart_24px_outlined} />
            <Text style={styles.subtitle}>{' '} {project?.indicatorTitle1}</Text>
          </View>
          <Text style={[styles.subtitle, styles.bold]}>{project?.indicatorValue1}</Text>
        </Row>
        <Row marginTop={15}>
          <View style={styles.iconRow}>
            <Image source={vertical_align_center_24px_outlined} />
            <Text style={styles.subtitle}>
              {' '}
              {project?.indicatorTitle2}
            </Text>
          </View>
          <Text style={[styles.subtitle, styles.bold]}>{project?.indicatorValue2}</Text>
        </Row>
        <Row marginTop={15}>
          <View style={styles.iconRow}>
            <Image source={show_chart_24px_outlined} />
            <Text style={styles.subtitle}> Control de flujos</Text>
          </View>
          <Text style={[styles.subtitle, styles.bold]}>
            {project?.indicatorValue3}
          </Text>
        </Row>

        <Line marginBottom={30} marginTop={30} />

        <Text style={[styles.heading, styles.bold]}>Puntos destacados</Text>

        {
          project?.projectCharacteristics.map((c, i) => (
            <Fragment key={i}>
              <View style={[styles.iconRow, itemPadding]}>
                <MaterialIcons size={25} color={colors.green} name="done" />
                <Text style={[styles.subtitle, styles.bold]}>
                  {' '}
                  {c?.title}
                </Text>
              </View>
              <Text style={[styles.smTxt, { paddingVertical: 10 }]}>
                {c?.description}
              </Text>
            </Fragment>
          ))
        }






        <Text style={[styles.smTxt, { paddingVertical: 10 }]}>
          {project?.longDescription}
        </Text>

        <Line marginBottom={30} marginTop={30} />

        <Text style={[styles.heading, styles.bold, { paddingBottom: 20 }]}>
          Ubicación
        </Text>

        <Map height={300} lat={parseFloat(project?.lat)} lng={parseFloat(project?.lng)} />
      </View>
    );
  }
}

function mapStateToProps({ projects, shared }) {
  return {
    selectedProject: shared && shared.selectedProject,
    projects,
  }
}

export default connect(mapStateToProps)(Campana)



