import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'GrupoScreen'>;

export default function GrupoScreen({ navigation }: Props) {
  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>Meus Grupos</Text>

      {/* Aqui futuramente vai listar os grupos */}

      <Button title="Criar Grupo" onPress={() => navigation.navigate('CreateScreen')} />
    </View>
  );
}
