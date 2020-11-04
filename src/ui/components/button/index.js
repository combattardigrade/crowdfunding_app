import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

export default ({title, backgroundColor, marginBottom, marginTop, onPress}) => {
  const onClick = () => {
    onPress && onPress();
  };
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.container,
        backgroundColor && {backgroundColor},
        marginBottom && {marginBottom},
        marginTop && {marginTop},
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
