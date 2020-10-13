import React, {memo} from 'react';
import {View} from 'react-native';
import {colors} from '../../constants/colors';

export default memo(({color, marginBottom, marginTop}) => {
  return (
    <View
      style={[
        {
          backgroundColor: color ? color : colors.textColor,
          width: '100%',
          height: 1,
          opacity: 0.1,
        },
        marginBottom && {marginBottom},
        marginTop && {marginTop},
      ]}
    />
  );
});
