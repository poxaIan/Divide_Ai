// src/screens/EditScreen/index.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { globalStyles } from '../../styles/global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { api } from '../../services/api';

type Props = NativeStackScreenProps<RootStackParamList, 'EditScreen'>;

export default function EditScreen({ route, navigation }: Props) {
  const { grupo } = route.params;
  const [titulo, setTitulo] = useState(grupo.nome);
  const [integrantes, setIntegrantes] = useState(grupo.participantes.join(', '));

  const handleSalvar = async () => {
    try {
      const participantesArray = integrantes
        .split(',')
        .map(nome => nome.trim())
        .filter(Boolean);

      await api.put(`/grupos/${grupo.id}`, {
        nome: titulo,
        participantes: participantesArray,
      });

      Alert.alert('Sucesso', 'Grupo atualizado!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar grupo:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o grupo.');
    }
  };

  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>Editar Grupo</Text>

      <TextInput
        style={globalStyles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Nome do grupo"
      />

      <TextInput
        style={globalStyles.input}
        value={integrantes}
        onChangeText={setIntegrantes}
        placeholder="Participantes (ex: João, Maria)"
      />

      <Button title="Salvar alterações" onPress={handleSalvar} />
    </View>
  );
}
