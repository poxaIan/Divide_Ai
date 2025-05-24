// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GrupoScreen from '../screens/GrupoScreen';
import CreateScreen from '../screens/CreateScreen';
import { RootStackParamList } from './types';
import EditScreen from '../screens/EditScreen';
import DespesasScreen from '../screens/DespesasScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GrupoScreen" component={GrupoScreen} />
      <Stack.Screen name="CreateScreen" component={CreateScreen} />
      <Stack.Screen name="EditScreen" component={EditScreen} />
      <Stack.Screen name="DespesasScreen" component={DespesasScreen} options={{ title: 'Despesas' }} />
    </Stack.Navigator>
  );
}
