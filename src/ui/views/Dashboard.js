import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/header';
import DashboardItem from '../components/dashboardItem';
import { colors } from '../../constants/colors'

// API
import { getAllProjectsByStatusAndPage, getUserData } from '../../utils/api'

// Actions
import { saveProjects, removeProjects } from '../../actions/projects'
import { saveUserData, removeUserData } from '../../actions/user'

class Dashboard extends Component {

    componentDidMount() {

        const { token, dispatch, navigation } = this.props

        // dispatch(removeUserData())

        getUserData({ token })
            .then(data => data.json())
            .then((res) => {
                console.log(res)
                if (res.status === 'OK') {
                    dispatch(saveUserData(res.payload))
                }
            })


        dispatch(removeProjects())

        getAllProjectsByStatusAndPage({ status: 'ACTIVE', page: 1, token })
            .then(data => data.json())
            .then((res) => {
                console.log(res)
                if (res.status === 'OK') {
                    const projects = {}
                    for (let p of res.payload) {
                        projects[p.id] = {
                            ...p
                        }
                    }
                    dispatch(saveProjects(projects))
                }
            })

        getAllProjectsByStatusAndPage({ status: 'COMPLETED', page: 1, token })
            .then(data => data.json())
            .then((res) => {
                console.log(res)
                if (res.status === 'OK') {
                    const projects = {}
                    for (let p of res.payload) {
                        projects[p.id] = {
                            ...p
                        }
                    }
                    dispatch(saveProjects(projects))
                }
            })
    }

    render() {

        const { projects, navigation } = this.props

        return (
            <ScrollView style={styles.bg}>
                <View style={styles.container}>
                    <Header title="Invertir" />
                    <Text style={styles.title}>Oportunidades de Inversión</Text>
                    {
                        Object.values(projects).filter(p => p.status === 'ACTIVE').map((p, i) => (
                            <DashboardItem key={i} project={p} navigation={navigation} />
                        ))
                    }
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
    title: {
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 10,
    },
    bg: {
        backgroundColor: colors.bg,
    },
});

function mapStateToProps({ projects, auth }) {
    return {
        projects,
        token: auth && auth.token
    }
}

export default connect(mapStateToProps)(Dashboard)
