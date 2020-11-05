import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

// Icons
import Icon from 'react-native-vector-icons/Fontisto';

// Components
import Row from '../components/row';
import ProjectHeader from '../components/projectHeader';
import ProgressBar from '../components/progress';
import Line from '../components/line';
import Button from '../components/button';
import TableSection from '../components/tableSelection';
import ProjectTabs from '../components/projectTabs';

// styles
import { colors } from '../../constants/colors';
const progress = Math.floor(Math.random() * 100) + 20

// Libraries
import moment from 'moment'
import currencyFormatter from 'currency-formatter'

class Project extends Component {
    render() {

        const { projects, selectedProject } = this.props
        const project = projects[selectedProject]

        const today = moment()
        const campaignEndDate = moment(project.campaignEndDate, 'DD/MM/YYYY')
        const remainingDays = campaignEndDate.diff(today, 'days')
        const raisedPercentage = parseFloat(project.amountRaisedPercentage) !== 0 ? `${parseFloat(project.amountRaisedPercentage).toFixed(0)}%` : '1%'

        return (
            <SafeAreaInsetsContext.Consumer>
                {(insets) => (
                    <Fragment>
                        <ScrollView style={styles.bg} >
                            <View style={styles.container}>
                                <ProjectHeader title={project.projectTitle} project={project} />
                                <View style={styles.main}>
                                    <Text style={styles.lgTxt}>{project.projectTitle}</Text>
                                    <Row marginBottom={30}>
                                        <Text style={styles.subtitle}>{project.campaignTitle} • Por {project.developer.name}</Text>
                                        <Text style={{ opacity: .7 }}>
                                            <Icon name="clock" />
                                            <Text style={styles.smTxt}> Quedan {parseFloat(remainingDays) > 0 ? remainingDays : '0'} días</Text>
                                        </Text>
                                    </Row>

                                    <ProgressBar
                                        borderRadius={10}
                                        activeColor={colors.primaryDark}
                                        percentage={raisedPercentage}
                                    />
                                    <Row marginBottom={35} marginTop={7}>
                                        <View style={styles.flex}>
                                            <Text style={[styles.smTxt, { fontSize: 10 }]}>Recaudado</Text>
                                            <Text style={[styles.smTxt, { fontSize: 10 }]}>{currencyFormatter.format(project.amountRaised, { code: 'USD' })}</Text>
                                        </View>
                                        <View style={styles.flex}>
                                            <Text style={[styles.smTxt, { fontSize: 10 }]}>Meta Min.</Text>
                                            <Text style={[styles.smTxt, { fontSize: 10 }]}>{currencyFormatter.format(project.minAmount, { code: 'USD' })}</Text>
                                        </View>
                                        <View style={styles.flex}>
                                            <Text style={[styles.smTxt, { fontSize: 10 }]}>Meta Max.</Text>
                                            <Text style={[styles.smTxt, { fontSize: 10 }]}>{currencyFormatter.format(project.maxAmount, { code: 'USD' })}</Text>
                                        </View>
                                    </Row>
                                    
                                    <Line marginBottom={30} />
                                    
                                    <Text style={styles.descTxt}>{project.projectDescription}</Text>
                                    
                                    <Line marginTop={10} marginBottom={30} />
                                    
                                    <TableSection project={project} />
                                    
                                    <Line marginTop={10} marginBottom={20} />
                                    
                                    <ProjectTabs project={project} />
                                </View>
                            </View>
                        </ScrollView>
                        <View style={[styles.bottomView, { paddingBottom: insets.bottom + 20 }]}>
                            <Button backgroundColor={colors.primaryDark} title="Invertir" />
                        </View>
                    </Fragment>
                )}
            </SafeAreaInsetsContext.Consumer>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBg: {
        width: '100%',
        height: 300,
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    back: {
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 18,
    },
    fullImage: {
        width: '100%',
        height: 300,
    },
    blue: {
        color: colors.primaryBlue,
    },
    center: {
        alignItems: 'center',
    },
    box: {
        width: '100%',
        padding: 10,
        backgroundColor: colors.borderColor,
        borderRadius: 5,
        marginBottom: 20,
    },
    tabView: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 2,
        color: colors.white,
    },
    rightItem: {
        width: 40,
    },
    bold: {
        fontWeight: 'bold',
    },
    small: {
        fontSize: 9,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingRight: 6,
    },
    bg: {
        backgroundColor: colors.white,
    },
    main: {
        top: -50,
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 100,
    },
    lgTxt: {
        fontSize: 20,
        fontWeight: '700',
    },
    scene: {
        flex: 1,
        // height: 1200,
        paddingTop: 20,
    },
    subtitle: {
        fontSize: 15,
    },
    smTxt: {
        fontSize: 12,
        opacity: 0.9,
    },
    descTxt: {
        fontSize: 12,
        lineHeight: 20,
        paddingBottom: 20,
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    inActiveindicator: {
        // borderBottomColor: colors.primaryDark,
        // borderBottomWidth: 1
    },
    indicator: {
        borderBottomColor: colors.primaryDark,
        borderBottomWidth: 2,
    },
    labelStyle: {
        fontSize: 10,
        textTransform: 'capitalize',
    },
});

function mapStateToProps({ projects, shared }) {
    return {
        projects,
        selectedProject: shared && shared.selectedProject
    }
}

export default connect(mapStateToProps)(Project)