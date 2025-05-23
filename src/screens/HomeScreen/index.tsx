// src/screens/HomeScreen/index.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>DivideAí</Text>
      <Button title="Iniciar" onPress={() => navigation.navigate('GrupoScreen')} />
    </View>
  );
}
