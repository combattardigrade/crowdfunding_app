import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './bottomTab';
import Intro from '../modules/intro'
import Login from '../modules/auth/login'
import LoginDark from '../modules/auth/loginDark'
import Signup from '../modules/auth/signup'
import Continue from '../modules/auth/signup/continue'
import Projects from '../modules/projects'
const AppStack = createStackNavigator();

const TechApp = () => {
  return (
    <AppStack.Navigator
      initialRouteName={'Intro'}
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="LoginDark" component={LoginDark} />
      <AppStack.Screen name="Continue" component={Continue} />
      <AppStack.Screen name="Projects" component={Projects} />
      <AppStack.Screen name="Signup" component={Signup} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Intro" component={Intro} />
      <AppStack.Screen name="BottomTab" component={BottomTab} />
    </AppStack.Navigator>
  );
};

export default TechApp;
