import React, {memo} from 'react';
import {View} from 'react-native';
import styles from './style';

export default memo(
  ({
    children,
    marginBottom,
    marginTop,
    paddingHorizontal,
    paddingVertical,
    wrap,
    alignItems,
    padding,
    justifyContent,
  }) => {
    const components = React.Children.toArray(children);
    return (
      <View
        style={[
          styles.row,
          paddingHorizontal && {paddingHorizontal},
          paddingVertical && {paddingVertical},
          padding && {padding},
          marginTop && {marginTop},
          marginBottom && {marginBottom},
          alignItems && {alignItems},
          justifyContent && {justifyContent},
          wrap && {flexWrap: 'wrap', alignItems: 'flex-start'},
        ]}>
        {components.map((N) => N)}
      </View>
    );
  },
);
