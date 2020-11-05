import React, { memo } from 'react';
import { Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import CustomMarker from './CustomMarker';
import CustomLabel from './CustomLabel';
import { colors } from '../../../constants/colors';
const width = Dimensions.get('screen').width - 30;
export default memo(({ onValueChange, step, value, minimumValue, maximumValue }) => {
  return (
    <Slider
      onValueChange={onValueChange}
      step={step}
      value={value}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      selectedStyle={{
        backgroundColor: colors.primaryDark,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,

      }}
      unselectedStyle={{
        backgroundColor: 'silver',
        borderTopRightRadius: 20,


      }}

      containerStyle={{
        height: 40,
        borderRadius: 20,

      }}
      trackStyle={{
        height: 10,
        borderTopRightRadius: 7
      }}
      touchDimensions={{
        height: 40,
        width: 40,
        borderRadius: 20,
        slipDisplacement: 40,

      }}
      customMarker={CustomMarker}
      //   customLabel={CustomLabel}
      sliderLength={width}
      thumbTintColor='#227BFF'
      minimumTrackTintColor={'#227BFF'}
    />
  );
});
