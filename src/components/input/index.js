import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {colors} from '../../constants/colors';
import styles from './style';
export default ({
  title,
  placeholder,
  required,
  backgroundColor,
  marginBottom,
  light,
}) => {
  return (
    <View
      style={[
        styles.container,
        backgroundColor && {backgroundColor},
        marginBottom && {marginBottom},
        light && styles.light,
      ]}>
      <Text style={styles.title}>
        {title}
        {required && <Text style={styles.required}>*</Text>}
      </Text>
      <TextInput
        placeholderTextColor={
          light ? 'rgba(255,255,255,.6)' : colors.borderColor
        }
        style={[styles.input, light && styles.lightInput]}
        placeholder={placeholder}
      />
    </View>
  );
};
