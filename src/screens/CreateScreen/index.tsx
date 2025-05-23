import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateScreen'>;

export default function CreateScreen({ navigation }: Props) {
  const [titulo, setTitulo] = useState('');
  const [integrantes, setIntegrantes] = useState('');

  const handleSalvarGrupo = () => {
    // Aqui você poderá futuramente enviar esses dados para API ou Contexto
    console.log('Grupo salvo:', { titulo, integrantes });

    // Volta para tela de Grupos
    navigation.goBack();
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
