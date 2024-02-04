import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import Index from './src/Screens/Index';
import {store} from './src/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Index />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
