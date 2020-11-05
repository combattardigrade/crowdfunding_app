import React, { Component, Fragment } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Row from '../../row';
import Line from '../../line';
import styles from '../style';
import { connect } from 'react-redux';
import { API } from '@env'

const img =
  'https://image.freepik.com/free-photo/hand-pencil-pictures-students-writing-education-concept-with-copy-space_24883-1955.jpg';

class Garantia extends Component {
  render() {

    const { projects, selectedProject } = this.props
    const project = projects[selectedProject]
    const imageURL = project.garantiaPictureId ? `${API}picture/${project.garantiaPictureId}` : img

    return (
      <View style={[styles.scene]}>
        <Text style={[styles.heading, styles.bold]}>Garantía </Text>
        <Text style={[styles.smTxt, { paddingVertical: 10 }]}>
          Tipo de Garantía: {project?.garantia}
        </Text>
        <Text style={[styles.smTxt, { paddingVertical: 10 }]}>
          {project?.detallesGarantia}
        </Text>
        <Line marginBottom={20} marginTop={10} />

        <Image style={styles.fullImage} source={{ uri: imageURL }} />
      </View>
    );
  }
}

function mapStateToProps({ projects, shared }){
  return {
    selectedProject: shared && shared.selectedProject,
    projects
  }
}

export default connect(mapStateToProps)(Garantia)
