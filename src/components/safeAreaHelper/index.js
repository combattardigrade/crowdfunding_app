import React, {memo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './style';

export default memo(() => {
  return <SafeAreaView style={[styles.bgColor]} />;
});
