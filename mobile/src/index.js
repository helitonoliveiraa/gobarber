import 'react-native-gesture-handler';

import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import {store, persistor} from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#007adf" barStyle="light-content" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
