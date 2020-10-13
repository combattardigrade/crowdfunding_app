import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Row from '../../components/row';
import styles from './style';
import Header from './header';
import Icon from 'react-native-vector-icons/Fontisto';
import ProgressBar from '../../components/progress';
import Line from '../../components/line';
import Button from '../../components/button';
import TableSection from './tableSection';
import {colors} from '../../constants/colors';
import {descriptionTxt} from './constants';
import Tabs from './tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const progress = Math.floor(Math.random() * 100) + 20
export default () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <ScrollView style={styles.bg}>
        <View style={styles.container}>
          <Header title="Desarrollo Alfa" />
          <View style={styles.main}>
            <Text style={styles.lgTxt}>Desarrollo Alfa</Text>
            <Row marginBottom={30}>
              <Text style={styles.subtitle}>Por Desarrollador Uno</Text>
              <Text style={{opacity:.7}}>
                <Icon name="clock" />
                <Text style={styles.smTxt}> Quedan 39 días</Text>
              </Text>
            </Row>

            <ProgressBar
              borderRadius={10}
              activeColor={colors.primaryDark}
              percentage={`${progress}%`}
            />
            <Row marginBottom={35} marginTop={7}>
              <Text style={[styles.smTxt,{fontSize:10}]}>$1.5MM recaudado</Text>
              <Text style={[styles.smTxt,{fontSize:10}]}>Min $2.5MM</Text>
              <Text style={[styles.smTxt,{fontSize:10}]}>Max $4.5MM</Text>
            </Row>
            <Line marginBottom={30} />
            <Text style={styles.descTxt}>{descriptionTxt}</Text>
            <Line marginTop={10} marginBottom={30} />
            <TableSection />
            <Line marginTop={10} marginBottom={20} />
            <Tabs />
          </View>
        </View>
      </ScrollView>
      <View style={[styles.bottomView, {paddingBottom: insets.bottom + 20}]}>
        <Button backgroundColor={colors.primaryDark} title="Invertir" />
      </View>
    </>
  );
};
