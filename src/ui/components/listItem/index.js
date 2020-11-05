import React, { memo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../constants/colors'

export default memo(({ blue, gray, img, title, subtitle }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Image source={img} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.subtitle, blue && { color: colors.primaryBlue }, gray && { color: "#000000", opacity: .6 }]}>
            {subtitle}
          </Text>
        </View>
      </View>
      <Icon size={24} color={colors.borderColor} name="chevron-forward" />
    </TouchableOpacity>
  );
});
