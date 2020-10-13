import React, {memo} from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default memo(({title, percentage, borderRadius, activeColor}) => {
  return (
    <View style={[styles.container, borderRadius && {borderRadius}]}>
      <View
        style={[
          styles.highlight,
          title && {width: '100%'},
          percentage && {width: percentage},
          borderRadius && {borderRadius},
          activeColor && {backgroundColor: activeColor},
        ]}>
        <Text style={styles.title}>{title ? title : percentage}</Text>
      </View>
    </View>
  );
});
