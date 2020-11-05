import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Header from '../components/header';
import { contactImage } from '../../constants/images';
import Button from '../components/button';
import Line from '../components/line';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../constants/colors';

class Contact extends Component {
    render() {
        return (
            <ScrollView style={styles.bg} >
                <Header paddingHorizontal={20} title="Contacto" />
                <Line marginBottom={10} />
                <View style={styles.container}>
                    <Text style={styles.title}>¿Necesitas ayuda?</Text>
                    <Text style={styles.subtitle}>Estamos aquí para ayudarte</Text>
                    <View style={styles.center}>
                        <Image source={contactImage} />

                        <Button
                            marginBottom={50}
                            marginTop={50}
                            title="Contactar en WhatsApp"
                        />
                    </View>
                    <Line marginBottom={20} />

                    <Text>
                        Para respuestas inmediatas visita nuestra sección de{' '}
                        <Text style={styles.blue}>Preguntas Frecuentes</Text>
                    </Text>

                    <Text style={[styles.txt, { paddingTop: 10 }]}>Conecta con nosotros:</Text>

                    <View style={styles.iconView}>
                        <Icon size={25} color={colors.primaryBlue} name="facebook-square" />
                        <Icon size={25} color={colors.primaryBlue} name="twitter-square" />
                        <Icon size={25} color={colors.primaryBlue} name="linkedin-square" />
                    </View>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 10,
    },
    bg: {
        backgroundColor: colors.white,
    },
    center: {
        alignItems: 'center',
        paddingTop: 50,
    },
    blue: {
        color: colors.primaryBlue,
    },
    txt: {
        marginTop: 10,
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        width: 100,
        justifyContent: 'space-between',
    },
    icon: {},
});


function mapStateToProps({ projects, shared }) {
    return {
        projects,
        selectedProject: shared && shared.selectedProject
    }
}

export default connect(mapStateToProps)(Contact)