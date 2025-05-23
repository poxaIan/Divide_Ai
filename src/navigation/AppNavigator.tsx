// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GrupoScreen from '../screens/GrupoScreen';
import CreateScreen from '../screens/CreateScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'DivideAí' }} />
      <Stack.Screen name="GrupoScreen" component={GrupoScreen} options={{ title: 'Meus Grupos' }} />
      <Stack.Screen name="CreateScreen" component={CreateScreen} options={{ title: 'Novo Grupo' }} />
    </Stack.Navigator>
  );
}
