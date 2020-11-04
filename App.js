// Redux
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSensitiveStorage from "redux-persist-sensitive-storage"
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import middleware from './src/middleware'

import React, { Component } from 'react'
import Navigation from './src/navigation/Navigation'
import { StatusBar } from 'react-native'
import { colors } from './src/constants/colors'

class App extends Component {
  render() {

    const sensitiveStorage = createSensitiveStorage({
      keychainService: "fibracero_keychain",
      sharedPreferencesName: "fibracero_keystore"
    })

    const persistConfig = {
      key: 'root',
      storage: sensitiveStorage
    }

    const persistedReducer = persistReducer(persistConfig, reducer)
    const store = createStore(persistedReducer, middleware)
    const persistor = persistStore(store)

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={colors.primaryDark} />
          <Navigation />
        </PersistGate>
      </Provider>
    )
  }
};

export default App
