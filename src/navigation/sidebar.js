import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sidebar from '../modules/sidebar';
import StackNavigation from './stack';

const Drawer = createDrawerNavigator();

const CustomerDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default CustomerDrawerNavigator;
