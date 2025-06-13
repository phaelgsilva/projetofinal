import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { LogBox } from 'react-native';

// Ignorar logs não críticos do React Native
LogBox.ignoreLogs(['Warning: ...']);

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;