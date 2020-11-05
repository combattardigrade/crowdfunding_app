import React, { Component, Fragment } from 'react'
import { View, AppState } from 'react-native'
import { connect } from 'react-redux'

// Navigation
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator, HeaderStyleInterpolators, TransitionSpecs, TransitionPresets } from '@react-navigation/stack'
import DrawerScreens from './DrawerScreens'

// Views
import Intro from '../ui/views/Intro'
import Login from '../ui/views/Login'
import Signup from '../ui/views/Signup'
import ProjectProfile from '../ui/views/ProjectProfile'


// import BackgroundTimer from 'react-native-background-timer'

// Actions 
// import { toggleWalletLock, walletSaved } from '../actions/auth'

const Stack = createStackNavigator()

class Navigation extends Component {

    state = {
        appState: AppState.currentState,
        loading: true,
    }

    componentDidMount() {
        // SplashScreen.hide()
        const { dispatch } = this.props
        // dispatch(walletSaved(false))
        this.setState({ loading: false })

        AppState.addEventListener('change', this.handleAppStateChange)
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange)
    }

    handleAppStateChange = (nextAppState) => {
        const { appState } = this.state
        const { dispatch } = this.props

        if (nextAppState !== 'active') {
            // BackgroundTimer.setTimeout(() => {

            //     dispatch(toggleWalletLock(true))

            // }, 100)
        }

        this.setState({ appState: nextAppState })
    }

    render() {
        const { auth } = this.props
        const { token, lock } = auth
       
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Dashboard">
                    {
                        (!token)
                            ?
                            <Fragment>
                                <Stack.Screen name="Intro" component={Intro} options={{ header: () => null }} />
                                <Stack.Screen name="Login" component={Login} options={{ header: () => null }} />
                                <Stack.Screen name="Signup" component={Signup} options={{ header: () => null }} />
                            </Fragment>
                            :
                            <Fragment>
                                <Stack.Screen name="Dashboard" component={DrawerScreens} options={{ header: () => null }} />
                                <Stack.Screen name="ProjectProfile" component={ProjectProfile} options={{ header: () => null }} />
                            </Fragment>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

function mapStateToProps({ auth }) {
    return {
        auth,
    }
}

export default connect(mapStateToProps)(Navigation)