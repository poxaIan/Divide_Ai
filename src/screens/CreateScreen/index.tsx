// src/screens/CreateScreen/index.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { globalStyles } from '../../styles/global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { api } from '../../services/api';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateScreen'>;

export default function CreateScreen({ navigation }: Props) {
  const [titulo, setTitulo] = useState('');
  const [integrantes, setIntegrantes] = useState('');

  const handleSalvarGrupo = async () => {
    try {
      const participantesArray = integrantes
        .split(',')
        .map(nome => nome.trim())
        .filter(nome => nome.length > 0);

      const response = await api.post('/grupos', {
        nome: titulo,
        participantes: participantesArray,
      });

      console.log('Grupo salvo:', response.data);
      Alert.alert('Sucesso', 'Grupo criado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar grupo:', error);
      Alert.alert('Erro', 'Não foi possível criar o grupo.');
    }
  };

  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>Criar Novo Grupo</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Nome do grupo"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Integrantes (ex: João, Ana)"
        value={integrantes}
        onChangeText={setIntegrantes}
      />

      <Button title="Salvar Grupo" onPress={handleSalvarGrupo} />
    </View>
  );
}
