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
    StyleSheet
} from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Button from '../components/button';
import TextInput from '../components/input';
import { colors } from '../../constants/colors';
import {
    backArrowIcon,
    bgImage,
    whileLogoImage,
    checkEmail
} from '../../constants/images';
import { getSafeAreaStyle } from '../../utils';
import Toast, { DURATION } from 'react-native-easy-toast'
import { checkSequentialCharacters } from '../../utils/index'

// Actions
import { saveToken } from '../../actions/auth'

// API
import { signup } from '../../utils/api'

class Signup extends Component {

    state = {
        email: '',
        password: '',
        rpassword: '',
        firstName: '',
        secondName: '',
        lastName: '',
        motherLastName: '',
        part: 1
    }

    componentDidMount() {

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

        if (!(/^(?=.*[\d])(?=.*[a-z])(?=.*[!@#$%^&*.?+-:;])[\w!@#$%^&*.?+-:;]{8,}$/.test(password))) {
            this.toast.current.show('Tu contraseña debe contener al menos una letra, un número, un caracter especial y tener un mínimo de 8 caracteres de largo')
            return
        }

        if (email === password || password.search(email) > 0) {
            this.toast.current.show('Las contraseñas ingresadas no coinciden')
            return
        }

        if (password === 'fibracero' || password.search('fibracero') > 0) {
            this.toast.current.show('Tu contraseña no puede contener el nombre de la empresa')
            return
        }

        if (!checkSequentialCharacters(password)) {
            this.toast.current.show('Tu contraseña no puede contener más de tres caracteres numéricos o alfabéticos en forma secuencial o identicos en forma consecutiva')
            return
        }

        this.setState({ part: 2 })
    }

    handleSignupBtn = () => {
        const { navigation, dispatch } = this.props
        const { email, password, rpassword, firstName, secondName, lastName, motherLastName } = this.state

        if (!firstName || !lastName || !motherLastName) {
            this.toast.current.show('Ingresa tu nombre completo')
            return
        }

        const params = {
            email, password, rpassword, firstName, secondName, lastName, motherLastName
        }

        signup(params)
            .then(data => data.json())
            .then((res) => {
                console.log(res)
                if (res.status === 'OK') {
                    this.setState({ part: 3 })
                    return
                }
                this.toast.current.show(res.message)
            })
            .catch((err) => {
                console.log(err)
                this.toast.current.show('Ocurrió un error, por favor inténtalo nuevamente')
                return
            })
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
                                    <Text style={styles.title}>{this.state.part === 1 ? 'Abrir Cuenta' : this.state.part === 2 ? 'Ingresa tu Nombre' : 'Verifica tu correo'}</Text>
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
                                            this.state.part === 2
                                                ?
                                                <View style={styles.bottomView}>

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
                                                :
                                                <View style={[styles.bottomView, { alignItems: 'center' }]}>
                                                    <Image style={{ height: 150, width: '100%', marginTop: 20 }} resizeMode="contain" source={checkEmail} />
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>¡Cuenta creada!</Text>
                                                    <Text style={{ textAlign: 'center', fontSize: 16, paddingHorizontal: 20, marginTop: 5 }}>Enviamos un enlace de verificación a tu correo para verificar tu cuenta.</Text>
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
                                        this.state.part === 2
                                            ?
                                            < Button
                                                onPress={() => this.handleSignupBtn()}
                                                // marginBottom={10}
                                                title="Abrir Cuenta"
                                            />
                                            :
                                            <Button
                                                onPress={() => navigation.navigate('Login')}
                                                // marginBottom={10}
                                                title="Ir a Iniciar sesión"
                                            />
                                }
                            </KeyboardAvoidingView>
                            <Toast
                                ref={this.toast}
                                style={{ backgroundColor: '#FF3366', paddingVertical: 10, paddingHorizontal: 20 }}
                                position='top'
                                positionValue={30}
                                fadeInDuration={250}
                                fadeOutDuration={3000}
                                opacity={1}
                                textStyle={{ color: 'white', fontSize: 16 }}

                            />
                        </ImageBackground>
                    )
                }
            </SafeAreaInsetsContext.Consumer>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    back: {
        paddingHorizontal: 20,
        paddingTop: 15
    },
    forgetBtn: {
        width: '100%',
        alignItems: 'flex-end',
        paddingVertical: 16,
    },
    logo: {
        height: 50,
        marginTop: 10,
    },
    kycView: {
        width: '100%',
        alignItems: 'center',

        paddingTop: 6,
        paddingBottom: 13
    },
    remove: {
        paddingBottom: 0,
    },
    title: {
        fontSize: 20,
        color: colors.textColor,
        fontWeight: 'bold',
        paddingBottom: 20,
        textAlign: 'center',
        lineHeight: 30,
        letterSpacing: 3,
    },
    bottomView: {
        flexGrow: 1,
        width: '100%',
    },
    main: {
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: colors.white,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    heading: {
        paddingVertical: 30,
        width: '100%',
        alignItems: 'center',
    },
});

function mapStateToProps({ auth }) {
    return {
        token: auth && auth.token
    }
}

export default connect(mapStateToProps)(Signup)
