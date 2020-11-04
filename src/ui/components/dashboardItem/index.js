import React, { memo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import Row from '../row';
import Line from '../line';
import { useNavigation } from '@react-navigation/native';
import Progress from '../progress';
import moment from 'moment'
import currencyFormatter from 'currency-formatter'
import { API } from '@env'

const img =
  'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

export default memo(({ project }) => {

  const today = moment()
  const campaignEndDate = moment(project.campaignEndDate, 'DD/MM/YYYY')
  const remainingDays = campaignEndDate.diff(today, 'days')
  const raisedPercentage = parseFloat(project.amountRaisedPercentage) !== 0 ? `${parseFloat(project.amountRaisedPercentage).toFixed(0)}%` : '1%'
  const imageURL = project.projectImages[0] !== undefined ? `${API}projectImage/${project.projectImages[0].hash}` : img

  return (
    <TouchableOpacity onPress={() => console.log('terst')} style={[styles.container]}>
      <Row paddingVertical={7} paddingHorizontal={13}>
        <View>
          <Text style={styles.title}>{project?.projectTitle}</Text>
          <Text style={styles.subtitle}>{project.campaignTitle} • Por {project.developer.name} </Text>
        </View>
        <Text style={styles.normalTxt}>Quedan {parseInt(remainingDays) > 0 ? remainingDays : '0'} días</Text>
      </Row>
      <Progress title={project?.instrumento} />

      <Image style={styles.img} source={{ uri: imageURL }} />



      <Progress percentage={raisedPercentage} />

      <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 5 }}>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>Recaudado</Text>
          <Text style={styles.smallTxt}>{currencyFormatter.format(project.amountRaised, { code: 'USD' })}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>Meta Min.</Text>
          <Text style={styles.smallTxt}>{currencyFormatter.format(project.minAmount, { code: 'USD' })}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>Meta Max.</Text>
          <Text style={styles.smallTxt}>{currencyFormatter.format(project.maxAmount, { code: 'USD' })}</Text>
        </View>
      </View>

      <Line />

      <Row paddingVertical={15} paddingHorizontal={13}>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>Tasa anual fija</Text>
          <Text style={[styles.title, styles.lowerTxt]}>{project?.tasaAnualFija}%</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>Mín de inversión</Text>
          <Text style={[styles.title, styles.lowerTxt]}>{currencyFormatter.format(project.inversionMinima, { code: 'USD' })} MXN</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.smallTxt}>Plazo</Text>
          <Text style={[styles.title, styles.lowerTxt]}>{project?.plazo} meses</Text>
        </View>
      </Row>

      <View />
    </TouchableOpacity>
  );
});
