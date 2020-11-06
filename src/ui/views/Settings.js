import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import Header from '../components/header';
import ListItem from '../components/listItem';
import { colors } from '../../constants/colors';
import {
    account_balance_24px,
    person_24px,
    portrait_24px,
    room_24px,
    verified_user_24px,
    wc_24px,
    zoom_in_24px,
    https_24px,
    mail_24px,
} from '../../constants/images';

class Settings extends Component {
    renderProfile = ({ item }) => {
        return <ListItem {...item} />;
    };

    renderItem = ({ item }) => {
        return <ListItem {...item} />;
    };

    render() {
        const { user, navigation } = this.props

        return (
            <ScrollView style={styles.bg}>
                <View style={styles.container}>
                    <Header
                        paddingHorizontal={20}
                        backgroundColor={colors.white}
                        title="Ajustes"
                    />
                    <Text style={styles.title}>Perfil</Text>

                    <ListItem
                        img={person_24px}
                        title='Datos personales'
                        subtitle={user?.personalInfoStatus === 'COMPLETED' ? 'Completedo' : 'Pendiente'}
                        blue={user?.personalInfoStatus === 'COMPLETED' ? true : false}
                        onPress={() => navigation.navigate('PersonalInfo')}
                    />
                    <ListItem
                        img={room_24px}
                        title='Dirección'
                        subtitle={user?.addressStatus === 'COMPLETED' ? 'Completedo' : 'Pendiente'}
                        blue={user?.addressStatus === 'COMPLETED' ? true : false}
                        onPress={() => navigation.navigate('Address')}
                    />
                    <ListItem
                        img={account_balance_24px}
                        title='Cuenta bancaria'
                        subtitle={user?.bankAccountStatus === 'COMPLETED' ? 'Completedo' : 'Pendiente'}
                        blue={user?.bankAccountStatus === 'COMPLETED' ? true : false}
                        onPress={() => navigation.navigate('BankAccount')}
                    />
                    <ListItem
                        img={person_24px}
                        title='Documentos'
                        subtitle={user?.documentsStatus === 'COMPLETED' ? 'Completedo' : 'Pendiente'}
                        blue={user?.documentsStatus === 'COMPLETED' ? true : false}
                        onPress={() => navigation.navigate('Documents')}
                    />
                    <ListItem
                        img={portrait_24px}
                        title='Conocimiento del inversionista'
                        subtitle={user?.investorKnowledgeStatus === 'COMPLETED' ? 'Completedo' : 'Pendiente'}
                        blue={user?.investorKnowledgeStatus === 'COMPLETED' ? true : false}
                        onPress={() => navigation.navigate('InvestorKnowledge')}
                    />
                    <ListItem
                        img={wc_24px}
                        title='Beneficiarios'
                        subtitle={user?.beneficiariesStatus === 'COMPLETED' ? 'Completedo' : 'Pendiente'}
                        blue={user?.beneficiariesStatus === 'COMPLETED' ? true : false}
                        onPress={() => navigation.navigate('Beneficiaries')}
                    />
                    <ListItem
                        img={zoom_in_24px}
                        title='Conocimiento de riesgos'
                        subtitle={user?.risksKnowledgeStatus === 'COMPLETED' ? 'Completedo' : 'Pendiente'}
                        blue={user?.risksKnowledgeStatus === 'COMPLETED' ? true : false}
                        onPress={() => navigation.navigate('RiskKnowledge')}
                    />


                    <View style={styles.box} />
                    <Text style={styles.title}>Seguridad</Text>

                    <ListItem
                        img={verified_user_24px}
                        title='Contraseña'
                        subtitle='Cambiar contraseña'
                        gray={true}
                        onPress={() => navigation.navigate('ChangePassword')}
                    />

                    <ListItem
                        img={mail_24px}
                        title='Email'
                        subtitle='Cambiar correo electrónico'
                        gray={true}
                        onPress={() => navigation.navigate('ChangeEmail')}
                    />
                    <View style={styles.box} />
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 10,
        paddingLeft: 20,
    },
    bg: {
        backgroundColor: colors.bg,
    },
    box: {
        backgroundColor: "white",
        width: '100%',
        height: 35
    }
});

function mapStateToProps({ projects, shared, user }) {
    return {
        projects,
        selectedProject: shared && shared.selectedProject,
        user
    }
}

export default connect(mapStateToProps)(Settings)