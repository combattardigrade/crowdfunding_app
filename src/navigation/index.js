import React, {memo} from 'react';
import DrawerNavigator from './sidebar';
import {NavigationContainer} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default memo(() => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
});
