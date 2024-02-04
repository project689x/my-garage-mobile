import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Index from './src/Screens/Index';
import {store} from './src/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Index />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
