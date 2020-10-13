import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/header';
import DashboardItem from '../../components/dashboardItem';
import styles from './style';
export default () => {
  return (
    <ScrollView style={styles.bg}>
      <View style={styles.container}>
        <Header title="Invertir" />
        <Text style={styles.title}>Oportunidades de Inversión</Text>
        <DashboardItem percentage={'40%'}/>
        <DashboardItem percentage={'80%'} />
        <DashboardItem percentage={'60%'} />
      </View>
    </ScrollView>
  );
};
