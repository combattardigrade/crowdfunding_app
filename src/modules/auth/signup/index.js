import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Button from '../../../components/button';
import TextInput from '../../../components/input';
import { colors } from '../../../constants/colors';
import {
  backArrowIcon,
  bgImage,
  whileLogoImage,
  kycImage
} from '../../../constants/images';
import { getSafeAreaStyle } from '../../../utils';
import styles from './style';
import Toast, { DURATION } from 'react-native-easy-toast'


class Signup extends Component {

  state = {
    email: '',
    password: '',
    rpassword: '',
    firstName: '',
    secondName: '',
    lastName: '',
    motherLastName: '',
    part: 2
  }

  componentDidMount() {
    console.log('test')
  }

  toast = React.createRef()

  handleInputChange = (name) => (value) => this.setState({ [name]: value })

  handleContinueBtn = () => {
    const { email, password, rpassword } = this.state

    if (!email || !this.validateEmail(email)) {
      this.toast.current.show('Ingresa un email válido')
      return
    }

    if (!password || !rpassword) {
      this.toast.current.show('Ingresa una contraseña válida')
      return
    }

    if (password !== rpassword) {
      this.toast.current.show('Las contraseñas ingresadas no coinciden')
      return
    }

    this.setState({ part: 2 })
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {

    const { navigation } = this.props

    return (
      <SafeAreaInsetsContext.Consumer>
        {
          (insets) => (
            <ImageBackground
              style={[styles.container, getSafeAreaStyle(insets), styles.remove]}
              source={bgImage}>
              <TouchableOpacity onPress={navigation.goBack} style={styles.back}>
                <Image source={backArrowIcon} />
              </TouchableOpacity>
              <View style={styles.heading}>
                <Image
                  resizeMode="contain"
                  style={styles.logo}
                  source={whileLogoImage}
                />
              </View>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={styles.main}>
                <ScrollView style={{ width: '100%' }}>
                  <Text style={styles.title}>{this.state.part === 1 ? 'Abrir Cuenta' : 'Ingresa tu Nombre'}</Text>
                  {
                    this.state.part === 1
                      ?
                      <View style={styles.bottomView}>
                        <TextInput
                          marginBottom={18}
                          placeholder="Email"
                          title="Email"
                          required
                          onChangeText={this.handleInputChange('email')}
                        />

                        <TextInput
                          marginBottom={18}
                          placeholder="Contraseña"
                          title="Contraseña"
                          required
                          onChangeText={this.handleInputChange('password')}
                          secureTextEntry={true}
                        />

                        <TextInput
                          marginBottom={30}
                          placeholder="Repetir contraseña"
                          title="Repetir contraseña"
                          required
                          onChangeText={this.handleInputChange('rpassword')}
                          secureTextEntry={true}
                        />
                      </View>
                      :
                      <View style={styles.bottomView}>
                        {/* <View style={styles.kycView}>
                          <Image style={{ height: 30 }} source={kycImage} />
                        </View> */}
                        <TextInput
                          marginBottom={10}
                          placeholder="Primer Nombre"
                          title="Primer Nombre"
                          required
                          onChangeText={this.handleInputChange('firstName')}
                        />

                        <TextInput
                          marginBottom={12}
                          placeholder="Segundo Nombre (Opcional)"
                          title="Segundo Nombre"
                          onChangeText={this.handleInputChange('secondName')}
                        />

                        <TextInput
                          marginBottom={12}
                          placeholder="Apellido Paterno"
                          title="Apellido Paterno"
                          required
                          onChangeText={this.handleInputChange('lastName')}
                        />

                        <TextInput
                          marginBottom={12}
                          placeholder="Apellido Materno"
                          title="Apellido Materno"
                          required
                          onChangeText={this.handleInputChange('motherLastName')}
                        />
                      </View>
                  }
                </ScrollView>
                {
                  this.state.part === 1
                    ?
                    <Button
                      onPress={() => this.handleContinueBtn()}
                      // marginBottom={10}
                      title="Continuar"
                    />
                    :
                    <Button
                      onPress={() => navigation.navigate('Continue')}
                      // marginBottom={10}
                      title="Abrir Cuenta"
                    />
                }
                <Toast
                  ref={this.toast}
                  style={{ backgroundColor: '#FF3366', paddingVertical: 10, paddingHorizontal: 20 }}
                  position='top'
                  positionValue={-120}
                  fadeInDuration={250}
                  fadeOutDuration={2000}
                  opacity={1}
                  textStyle={{ color: 'white', fontSize: 16 }}
                />
              </KeyboardAvoidingView>
            </ImageBackground>
          )
        }
      </SafeAreaInsetsContext.Consumer>
    );
  }
};

function mapStateToProps({ auth }) {
  return {
    token: auth && auth.token
  }
}

export default connect(mapStateToProps)(Signup)
