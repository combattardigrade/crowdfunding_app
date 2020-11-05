import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, FlatList, Linking, Alert, Platform } from 'react-native'

// Views

// Icons
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'

import {
    cuenta
} from '../constants/images'
import { colors } from '../constants/colors';

// Navigation
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { drawerItems } from './drawerItems';
import Profile from './profile';
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

// Views
import Dashboard from '../ui/views/Dashboard'
import Account from '../ui/views/Account'
import Settings from '../ui/views/Settings'
import Contact from '../ui/views/Contact'

class DrawerScreens extends Component {

    handleLogoutBtn = () => {
        console.log('LOGOUT_BTN')
        const { navigation, dispatch } = this.props
        dispatch(walletSaved(false))
        dispatch(removeWallet())
        dispatch(removeTxs())
        dispatch(removeBalances())
        dispatch(removePinHash())

        // navigation.reset({
        //     routes: [{ name: 'Intro' }]
        // })
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} style={styles.sideBarItem}>
                <View style={styles.iconCont}>
                    <Image source={item.icon} style={styles.itemIcon} />
                </View>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <Drawer.Navigator
                drawerContent={(props) => {
                    return (
                        <View>
                            <Profile />
                            <View style={{ paddingTop: 20, paddingHorizontal: 15, }}>
                                <FlatList
                                    data={drawerItems}
                                    keyExtractor={(_, index) => index.toString()}
                                    renderItem={this._renderItem}
                                />
                            </View>
                        </View>
                    )
                }}
            >
                <Drawer.Screen name="Home" component={BottomTabsScreens} />
            </Drawer.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    drawerMenuContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    drawerMenuIcon: {
        marginRight: 20
    },
    drawerMenuText: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 10
    },
    sideBarItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginTop: 10,
    },
    itemIcon: {
        width: 24,
        height: 24,
    },
    iconCont: {
        width: 50
    }
})

function mapStateToProps({ }) {
    return {

    }
}

export default connect(mapStateToProps)(DrawerScreens)


function BottomTabsScreens() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000',
                showLabel: false,
                tabStyle: {
                    backgroundColor: '#f9f9f9',
                    justifyContent: 'center',
                },
                style: {
                    height: Dimensions.get('window').height * 0.1,
                }
            }
            }>
            <Tab.Screen
                name="INVEST"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <IconMaterialCommunity name="trending-up" size={25} color={focused ? colors.primaryBlue : '#B9BDBE'} />
                                <Text style={{ fontSize: 10, marginTop: 0, fontWeight: 'bold', color: focused ? colors.primaryBlue : 'grey' }}>Invertir</Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Account" component={Account}
                options={{
                    tabBarIcon: ({ focused }) => {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <IconMaterialCommunity name="chart-pie" size={25} color={focused ? colors.primaryBlue : '#B9BDBE'} />
                                <Text style={{ fontSize: 10, marginTop: 0, fontWeight: 'bold', color: focused ? colors.primaryBlue : 'grey' }}>Portafolio</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Settings" component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <IconMaterial name="settings" size={25} color={focused ? colors.primaryBlue : '#B9BDBE'} />
                                <Text style={{ fontSize: 10, marginTop: 0, fontWeight: 'bold', color: focused ? colors.primaryBlue : 'grey' }}>Ajustes</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Contact" component={Contact}
                options={{
                    tabBarIcon: ({ focused }) => {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <IconMaterialCommunity name="message-outline" size={25} color={focused ? colors.primaryBlue : '#B9BDBE'} />
                                <Text style={{ fontSize: 10, marginTop: 0, fontWeight: 'bold', color: focused ? colors.primaryBlue : 'grey' }}>Contacto</Text>
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}