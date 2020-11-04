import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/header';
import DashboardItem from '../../components/dashboardItem';
import styles from './style';

// API
import { getAllProjectsByStatusAndPage } from '../../utils/api'

// Actions
import { saveProjects } from '../../actions/projects'

class Dashboard extends Component {

  componentDidMount() {

    const { dispatch } = this.props

    getAllProjectsByStatusAndPage({ status: 'ACTIVE', page: 1, token })
      .then(data => data.json())
      .then((res) => {
        console.log(res)
        if (res.status === 'OK') {
          dispatch(saveProjects(res.payload))
        }
      })

    getAllProjectsByStatusAndPage({ status: 'COMPLETED', page: 1, token })
      .then(data => data.json())
      .then((res) => {
        console.log(res)
        if (res.status === 'OK') {
          dispatch(saveProjects(res.payload))
        }
      })
  }

  render() {
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.container}>
          <Header title="Invertir" />
          <Text style={styles.title}>Oportunidades de Inversión</Text>
          <DashboardItem percentage={'40%'} />
          <DashboardItem percentage={'80%'} />
          <DashboardItem percentage={'60%'} />
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

function mapStateToProps({ projects }) {
  return {
    projects
  }
}

export default connect(mapStateToProps)(Dashboard)
