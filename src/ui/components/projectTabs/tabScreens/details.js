import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native';
import Row from '../../row';
import Line from '../../line';
const descriptionTxt = 'test'
import styles from '../style';
import Octicons from 'react-native-vector-icons/Octicons';
import { colors } from '../../../../constants/colors';
import { blackLogoImage } from '../../../../constants/images';
import moment from 'moment'
import currencyFormatter from 'currency-formatter'
import ImageViewer from 'react-native-image-zoom-viewer'
import { API } from '@env'
import IonIcons from 'react-native-vector-icons/Ionicons'

class Details extends Component {

  state = {
    showDocumentModal: false,
    documentUrl: ''
  }

  handleViewDocumentBtn = (documentHash) => {
    const url = `${API}projectDocument/${documentHash}`
    this.setState({ documentUrl: url, showDocumentModal: true })
  }

  render() {
    const { projects, selectedProject } = this.props
    const project = projects[selectedProject]

    const deudaSeniorPer = parseFloat(project.deudaSenior) / project.inversionTotal * 100
    const deudaPreferentePer = parseFloat(project.deudaPreferente) / project.inversionTotal * 100
    const deudaJuniorPer = parseFloat(project.deudaJunior) / project.inversionTotal * 100
    const capitalDesarrolladorPer = parseFloat(project.capitalDesarrollador) / project.inversionTotal * 100
    const preventa = parseFloat(project.preventa) / project.inversionTotal * 100
    console.log(`${API}picture/${project?.developer?.logoPictureId}`)
    return (
      <View style={[styles.scene]}>
        <Text style={[styles.heading, styles.bold]}>Estructura de capital</Text>
        <Text style={[styles.descTxt]}>
          Estas son las fuentes de donde proviene el dinero para cubrir el costo total requerido por el proyecto.
        </Text>

        <Row marginBottom={15}>
          <View style={styles.row}>
            <Text>
              <Octicons size={20} color={colors.green} name="primitive-dot" />
              <Text style={styles.subtitle}>{'  '} Deuda Senior</Text>
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.smTxt, styles.small]}>{currencyFormatter.format(project.deudaSenior, { code: 'USD' })}</Text>
            <Text style={[styles.smTxt, styles.small]}>{deudaSeniorPer}%</Text>
          </View>
        </Row>

        <Row marginBottom={15}>
          <View style={styles.row}>
            <Text>
              <Octicons size={20} color={colors.green} name="primitive-dot" />
              <Text style={styles.subtitle}>{'  '} Deuda Preferente</Text>
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.smTxt, styles.small]}>{currencyFormatter.format(project.deudaPreferente, { code: 'USD' })}</Text>
            <Text style={[styles.smTxt, styles.small]}>{deudaPreferentePer}%</Text>
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
            <Text style={[styles.smTxt, styles.small]}>{currencyFormatter.format(project.deudaSenior, { code: 'USD' })}</Text>
            <Text style={[styles.smTxt, styles.small]}>{deudaJuniorPer}%</Text>
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
            <Text style={[styles.smTxt, styles.small]}>{currencyFormatter.format(project.capitalDesarrollador, { code: 'USD' })}</Text>
            <Text style={[styles.smTxt, styles.small]}>{capitalDesarrolladorPer}%</Text>
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
            <Text style={[styles.smTxt, styles.small]}>{currencyFormatter.format(project.preventa, { code: 'USD' })}</Text>
            <Text style={[styles.smTxt, styles.small]}>{preventa}%</Text>
          </View>
        </Row>

        <Row marginBottom={10}>
          <View style={styles.row}>
            <Text>
              <Text style={styles.subtitle}>{'    '} Total</Text>
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.smTxt, styles.small, styles.bold]}>{currencyFormatter.format(project.inversionTotal, { code: 'USD' })}</Text>
            <Text style={[styles.smTxt, styles.small, styles.bold]}>100%</Text>
          </View>
        </Row>

        <Line marginTop={20} marginBottom={30} />
        <Text style={[styles.heading, styles.bold]}>
          Detalles del presupuesto
        </Text>
        <Text style={[styles.smTxt, { paddingVertical: 10 }]}>
          {project?.detallesPresupuesto}
        </Text>
        <Line marginTop={30} marginBottom={30} />

        <Text style={[styles.heading, styles.bold]}>Documentos</Text>

        <Row marginTop={20}>
          <Text style={[styles.smTxt, { opacity: .5 }]}>Documento</Text>
          <Text style={[styles.smTxt, { opacity: .5, width: 100 }]}>Ver</Text>
        </Row>
        <Line marginTop={8} />

        {
          project?.projectDocuments.length > 0
            ? project?.projectDocuments.map((d, i) => (
              <Fragment key={i}>
                <Row marginTop={20} marginBottom={10}>
                  <Text style={[styles.subtitle]}>{d.title}</Text>
                  <TouchableOpacity
                    onPress={() => this.handleViewDocumentBtn(d.hash)}
                  >
                    <Text style={[styles.subtitle, styles.blue]}>Ver documento</Text>
                  </TouchableOpacity>
                </Row>
                <Line marginBottom={20} />
              </Fragment>
            ))
            :
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text>-</Text>
              <Text>-</Text>
            </View>

        }
        <Modal visible={this.state.showDocumentModal} transparent={true}>
          <TouchableOpacity onPress={() => this.setState({ showDocumentModal: false })} style={{ backgroundColor: 'black', paddingTop: 5, paddingLeft: 5 }}>
            <IonIcons name="close-circle-outline" size={25} color={'white'} />
          </TouchableOpacity>
          <ImageViewer
            onCancel={() => this.setState({ showDocumentModal: false })}
            onSwipeDown={() => this.setState({ showDocumentModal: false })}
            enableSwipeDown={true}
            imageUrls={[{ url: this.state.documentUrl }]}
          />
        </Modal>


        <View style={{ marginBottom: 40 }}></View>

        <Text style={[styles.heading, styles.bold]}>
          Responsables del proyecto
        </Text>
        <Row marginTop={20}>
          <Text style={[styles.smTxt, { opacity: .5 }]}>Nombre</Text>
          <Text style={[styles.smTxt, { opacity: .5, width: 133, textAlign: 'center' }]}>Cargo</Text>
        </Row>
        <Line marginTop={8} />

        {
          project?.projectManagers.length > 0
            ? project?.projectManagers.map((p, i) => (
              <Fragment key={i}>
                <Row marginTop={20} marginBottom={10}>
                  <Text style={[styles.subtitle]}>{p.name}</Text>
                  <Text style={[styles.subtitle]}>{p.position}</Text>
                </Row>
                <Line marginBottom={20} />
              </Fragment>
            ))
            :
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text>-</Text>
              <Text>-</Text>
            </View>
        }

        <View style={{ marginBottom: 40 }}></View>
        <Text style={[styles.heading, styles.bold]}>Sobre el desarrollador</Text>
        <Image style={{height: 100, width: 100, borderRadius: 50, marginVertical: 20}} source={{ uri: `${API}picture/${project?.developer?.logoPictureId}` }} />
        <Text style={[styles.heading, styles.bold]}>{project?.developer?.name}</Text>
        <Text style={[styles.descTxt, { paddingBottom: 0 }]}>
          {project?.developer?.description}
        </Text>
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

export default connect(mapStateToProps)(Details)