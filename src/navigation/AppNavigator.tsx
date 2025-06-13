import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import ListagemQuadras from '../screens/quadras/ListagemQuadras';
import DetalhesQuadra from '../screens/quadras/DetalhesQuadra';
import Perfil from '../screens/perfil/Perfil';
import HistoricoReservas from '../screens/reservas/HistoricoReservas';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={AuthNavigator} />
        <Stack.Screen name="ListagemQuadras" component={ListagemQuadras} />
        <Stack.Screen name="DetalhesQuadra" component={DetalhesQuadra} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="HistoricoReservas" component={HistoricoReservas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;