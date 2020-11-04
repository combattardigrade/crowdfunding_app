import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
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
} from '../../constants/images';
import { getSafeAreaStyle } from '../../utils';
import Toast, { DURATION } from 'react-native-easy-toast'

// API
import { login } from '../../utils/api'

// Actions
import { saveToken } from '../../actions/auth'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    toast = React.createRef()

    handleInputChange = (name) => (value) => this.setState({ [name]: value })

    handleLoginBtn = () => {
        const { email, password } = this.state
        const { navigation, dispatch } = this.props

        if (!email) {
            this.toast.current.show('Ingresa un email válido')
            return
        }

        if (!password) {
            this.toast.current.show('Ingresa una contraseña válida')
            return
        }

        login({ email, password })
            .then(data => data.json())
            .then((res) => {
                console.log(res)
                if (res.status === 'OK') {
                    dispatch(saveToken(res.token))
                    navigation.navigate('BottomTab')
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
                            <View style={styles.main}>
                                <Text style={styles.title}>Iniciar sesión</Text>
                                <View style={styles.bottomView}>
                                    <TextInput
                                        marginBottom={18}
                                        placeholder="Email"
                                        title="Email"
                                        required
                                        onChangeText={this.handleInputChange('email')}
                                    />

                                    <TextInput
                                        marginBottom={10}
                                        placeholder="Contraseña"
                                        title="Contraseña"
                                        required
                                        secureTextEntry={true}
                                        onChangeText={this.handleInputChange('password')}
                                    />
                                    <TouchableOpacity style={styles.forgetBtn}>
                                        <Text>¿Olvidaste tu contraseña?</Text>
                                    </TouchableOpacity>
                                </View>
                                <Button
                                    onPress={() => this.handleLoginBtn()}
                                    marginBottom={10}
                                    title="Iniciar sesión"
                                />
                            </View>
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
        height: 70,
        marginTop: 10,
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
        paddingTop: 20,
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

export default connect(mapStateToProps)(Login)