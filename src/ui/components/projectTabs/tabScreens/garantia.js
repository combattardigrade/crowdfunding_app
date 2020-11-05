import React, { memo } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Row from '../../row';
import Line from '../../line';

import styles from '../style';
const descriptionTxt = 'test'
const img =
  'https://image.freepik.com/free-photo/hand-pencil-pictures-students-writing-education-concept-with-copy-space_24883-1955.jpg';
export default memo(() => {
  return (
    <View style={[styles.scene]}>
      <Text style={[styles.heading, styles.bold]}>Garantía </Text>
      <Text style={[styles.smTxt, { paddingVertical: 10 }]}>
        {descriptionTxt}
      </Text>
      <Text style={[styles.smTxt, { paddingVertical: 10 }]}>
        {descriptionTxt}
      </Text>
      <Line marginBottom={20} marginTop={10} />

      <Image style={styles.fullImage} source={{ uri: img }} />
    </View>
  );
});
