import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/header';
import PortfolioItem from '../components/portfolioItem';
import Line from '../components/line';
import Row from '../components/row';
import { colors } from '../../constants/colors'

class Account extends Component {
    render() {
        return (
            <ScrollView style={styles.bg}>
                <View style={styles.container}>
                    <Header title="Cuenta" />
                    <Line />
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txt}>Resumen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>
                            <Text style={styles.subtitle}>Transacciones</Text>
                        </TouchableOpacity>
                    </View>
                    <Line />

                    <View style={styles.center}>
                        <Text style={styles.subtitle}>VALOR PORTAFOLIO</Text>
                        <Text style={[styles.txt, styles.blue, styles.lgTxt]}>$100,000</Text>
                        <Row marginBottom={20} justifyContent="space-around">
                            <View style={[styles.center, { width: 130 }]}>
                                <Text style={[styles.txt, styles.blue]}>$500</Text>
                                <Text style={[styles.smTxt]}>Ganancias Diarias Estimadas</Text>
                            </View>
                            <View style={[styles.center, { width: 130 }]}>
                                <Text style={[styles.txt, styles.blue]}>$5,000</Text>
                                <Text style={[styles.smTxt]}>Ganancias Totales Estimadas</Text>
                            </View>
                        </Row>
                    </View>
                    <Line marginBottom={25} />

                    <Text style={styles.txt}>Portafolio</Text>
                    <Line marginTop={15} />
                    <PortfolioItem />
                    <Line />

                    <PortfolioItem />
                    <Line />

                    <PortfolioItem />
                    <Line />

                    <PortfolioItem />
                    <Line />
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    btn: {
        borderBottomWidth: 1,
        marginHorizontal: 22,
        paddingVertical: 15,
    },
    lgTxt: {
        fontSize: 30,
        paddingVertical: 10,
    },
    subtitle: {
        fontSize: 14,
    },
    smTxt: {
        fontSize: 12,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 10,
    },
    bg: {
        backgroundColor: "white",
    },
    center: {
        alignItems: 'center',
        paddingTop: 30,
    },
    blue: {
        color: colors.primaryBlue,
    },
    txt: {
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 2,
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        width: 100,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function mapStateToProps({ projects, shared, user }) {
    return {
        projects,
        selectedProject: shared && shared.selectedProject,
        user
    }
}

export default connect(mapStateToProps)(Account)