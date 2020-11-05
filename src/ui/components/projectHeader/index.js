import React, { memo } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getSafeAreaStyle } from '../../../utils';
import Row from '../row';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { backArrowIcon, home_image } from '../../../constants/images';
const img =
  'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

export default memo(({ title, project }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const imageURL = project.projectImages[0] !== undefined ? `${API}projectImage/${project.projectImages[0].hash}` : home_image
  return (
    <ImageBackground
      resizeMode="cover"
      style={[styles.headerBg, getSafeAreaStyle(insets)]}
      source={imageURL}>
      <Row marginTop={15}>
        <TouchableOpacity onPress={navigation.goBack} style={styles.back}>
          <Image source={backArrowIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightItem} />
      </Row>
    </ImageBackground>
  );
});
