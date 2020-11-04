import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking, Alert, Platform } from 'react-native'

// Views

// Icons
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'

// Navigation
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()


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

    render() {
        return (
            <Drawer.Navigator

                drawerContent={(props) => {
                    return (
                        <View style={{ marginTop: 40 }}>
                            
                            <TouchableOpacity onPress={() => Alert.alert('Alert', 'Coming soon!', [{ text: 'OK' }])}>
                                <View style={styles.drawerMenuContainer}>
                                    <IconMaterialCommunity name='lock' size={25} color='black' />
                                    <Text style={styles.drawerMenuText}>Change PIN</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => Linking.openURL('https://blits.net')}>
                                <View style={styles.drawerMenuContainer}>
                                    <IconMaterialCommunity name='gift-outline' size={25} color='black' />
                                    <Text style={styles.drawerMenuText}>Free ONE</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://blits.net')}>
                                <View style={styles.drawerMenuContainer}>
                                    <IconMaterialCommunity name='lightning-bolt' size={25} color='black' />
                                    <Text style={styles.drawerMenuText}>Blits.net</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('tg://resolve?domain=blits_community')}>
                                <View style={styles.drawerMenuContainer}>
                                    <IconMaterialCommunity name='telegram' size={25} color='black' />
                                    <Text style={styles.drawerMenuText}>Telegram Group</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://blits.net/terms')}>
                                <View style={styles.drawerMenuContainer}>
                                    <IconMaterialCommunity name='file-document' size={25} color='black' />
                                    <Text style={styles.drawerMenuText}>Terms & Conditions</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleLogoutBtn()}>
                                <View style={styles.drawerMenuContainer}>
                                    <IconMaterialCommunity name='logout-variant' size={25} color='black' />
                                    <Text style={styles.drawerMenuText}>Logout</Text>
                                </View>
                            </TouchableOpacity>
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
                name="WALLET"
                component={WalletView}
                options={{
                    tabBarIcon: ({ focused }) => {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <IconFontAwesome name="wallet" size={20} color={focused ? 'black' : '#B9BDBE'} />
                                <Text style={{ fontSize: 10, marginTop: 2, fontWeight: 'bold', color: focused ? '#000' : 'grey', fontFamily: 'Poppins-Regular' }}>WALLET</Text>
                            </View>
                        );
                    },
                }}
            />
            {/* <Tab.Screen name="ACTIVITY" component={WalletView}
          options={{
            tabBarIcon: ({ focused }) => {
              const image = focused ? require('./assets/images/activity-active.png')
                : require('./assets/images/activity.png')
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image resizeMode='contain' style={{ height: 18 }} source={image} />
                  <Text style={{ fontSize: 9, marginTop: 1, fontWeight: 'bold', color: focused ? '#000' : 'grey', fontFamily: 'Poppins-Regular' }}>ACTIVITY</Text>
                </View>
              );
            }
          }}
        /> */}
            <Tab.Screen name="LOANS" component={LoansView}
                options={{
                    tabBarIcon: ({ focused }) => {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <IconMaterialCommunity name="trending-up" size={25} color={focused ? 'black' : '#B9BDBE'} />
                                <Text style={{ fontSize: 10, marginTop: 0, fontWeight: 'bold', color: focused ? '#000' : 'grey', fontFamily: 'Poppins-Regular' }}>LOANS</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="CONTACTS" component={WalletView}
                options={{
                    tabBarIcon: ({ focused }) => {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <IconMaterial name="people" size={25} color={focused ? 'black' : '#B9BDBE'} />
                                <Text style={{ fontSize: 10, marginTop: 1, fontWeight: 'bold', color: focused ? '#000' : 'grey', fontFamily: 'Poppins-Regular' }}>CONTACTS</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="PROFILE" component={WalletView}
                options={{
                    tabBarIcon: ({ focused }) => {

                        return (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <IconMaterialCommunity name="account-circle" size={25} color={focused ? 'black' : '#B9BDBE'} />
                                <Text style={{ fontSize: 10, marginTop: 1, fontWeight: 'bold', color: focused ? '#000' : 'grey', fontFamily: 'Poppins-Regular' }}>PROFILE</Text>
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}