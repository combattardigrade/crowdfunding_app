import React from 'react';
import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Invertir from '../modules/dashboard';
import Dashboard from '../modules/dashboard';
import Adjusts from '../modules/adjusts';
import Contact from '../modules/contact';
import Cuenta from '../modules/cuenta';
import {invertir, ajustes, contacto, cuenta} from '../constants/images.js';
import {colors} from '../constants/colors';

const BottomTab = createBottomTabNavigator();
const PADDING_BOTTOM_TXT = 10
const MARGIN_BOTTOM_IMG= 13
function TechBottomTab() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let {name} = route;

          switch (name) {
            case 'Invertir':
              return (
                <Image
                  source={invertir}
                  style={{
                    tintColor: focused
                      ? colors.primaryBlue
                      : colors.tabIconInActive,
                    height: 20,
                    width: 20,
                    marginTop: MARGIN_BOTTOM_IMG+4
                  }}
                  tintColor={
                    focused ? colors.primaryBlue : colors.tabIconInActive
                  }
                />
              );

            case 'Cuenta':
              return (
                <Image
                  source={cuenta}
                  style={{
                    tintColor: focused
                      ? colors.primaryBlue
                      : colors.tabIconInActive,
                    height: 24,
                    width: 24,
                    marginTop: MARGIN_BOTTOM_IMG

                  }}
                  tintColor={
                    focused ? colors.primaryBlue : colors.tabIconInActive
                  }
                />
              );

            case 'Ajustes':
              return (
                <Image
                  source={ajustes}
                  style={{
                    tintColor: focused
                      ? colors.primaryBlue
                      : colors.tabIconInActive,
                    height: 24,
                    width: 24,
                    marginTop: MARGIN_BOTTOM_IMG

                  }}
                  tintColor={
                    focused ? colors.primaryBlue : colors.tabIconInActive
                  }
                />
              );

            case 'Contacto':
              return (
                <Image
                  source={contacto}
                  style={{
                    tintColor: focused
                      ? colors.primaryBlue
                      : colors.tabIconInActive,
                    height: 24,
                    width: 24,
                    marginTop: MARGIN_BOTTOM_IMG

                  }}
                  tintColor={
                    focused ? colors.primaryBlue : colors.tabIconInActive
                  }
                />
              );

            default:
              break;
          }
        },
        tabBarLabel: ({focused}) => {
          let {name} = route;

          switch (name) {
            case 'Invertir':
              return (
                <Text
                  style={{
                    color: focused
                      ? colors.primaryBlue
                      : colors.tabIconInActive,
                    fontSize: 10,
                    paddingBottom:PADDING_BOTTOM_TXT,
                    fontWeight: focused ? 'bold' : '600',
                  }}>
                  Invertir
                </Text>
              );

            case 'Cuenta':
              return (
                <Text
                  style={{
                    color: focused
                      ? colors.primaryBlue
                      : colors.tabIconInActive,
                    fontSize: 10,
                    paddingBottom:PADDING_BOTTOM_TXT,
                    fontWeight: focused ? 'bold' : '600',
                  }}>
                  Cuenta
                </Text>
              );

            case 'Ajustes':
              return (
                <Text
                  style={{
                    color: focused
                      ? colors.primaryBlue
                      : colors.tabIconInActive,
                    fontSize: 10,
                    paddingBottom:PADDING_BOTTOM_TXT,
                    fontWeight: focused ? 'bold' : '600',
                  }}>
                  Ajustes
                </Text>
              );

            case 'Contacto':
              return (
                <Text
                  style={{
                    color: focused
                      ? colors.primaryBlue
                      : colors.tabIconInActive,
                    fontSize: 10,
                    paddingBottom:PADDING_BOTTOM_TXT,

                    fontWeight: focused ? 'bold' : '600',
                  }}>
                  Contacto
                </Text>
              );
          }
        },
      })}
      initialRouteName="Invertir"
      tabBarOptions={{
        activeTintColor: 'gray',
        inactiveTintColor: 'gray',
        tabStyle: {
          justifyContent: 'center',
        },
        style: {
          borderTopColor: 'grey',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          height:60,
          justifyContent: 'center',
        },
      }}>
      <BottomTab.Screen name="Invertir" component={Dashboard} />

      <BottomTab.Screen name="Cuenta" component={Cuenta} />
      <BottomTab.Screen name="Ajustes" component={Adjusts} />
      <BottomTab.Screen name="Contacto" component={Contact} />
    </BottomTab.Navigator>
  );
}

export default TechBottomTab;
