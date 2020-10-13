/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CrowdFunding from './src/navigation';
import {StatusBar} from 'react-native';
import { colors } from './src/constants/colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.primaryDark} />
      <CrowdFunding />
    </>
  );
};

export default App;
