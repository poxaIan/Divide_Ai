import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { globalStyles } from '../../styles/global';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { api } from '../../services/api';
import { TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'GrupoScreen'>;

type Grupo = {
  id: string;
  nome: string;
  participantes: string[];
};

export default function GrupoScreen({ navigation }: Props) {
  const [grupos, setGrupos] = useState<Grupo[]>([]);

  const buscarGrupos = async () => {
    try {
      const response = await api.get('/grupos');
      setGrupos(response.data);
    } catch (error) {
      console.error('Erro ao buscar grupos:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', buscarGrupos);
    return unsubscribe;
  }, [navigation]);

  const excluirGrupo = async (id: string) => {
    try {
      await api.delete(`/grupos/${id}`);
      buscarGrupos(); // atualiza lista
    } catch (error) {
      console.error('Erro ao apagar grupo:', error);
    }
  };

  const renderItem = ({ item }: { item: Grupo }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DespesasScreen', { grupo: item })}
        style={styles.card}
      >
        <Text style={styles.title}>{item.nome}</Text>
        <Text>Participantes: {item.participantes.join(', ')}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => excluirGrupo(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Apagar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EditScreen', { grupo: item })}>
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>


    </View>
  );






  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>Meus Grupos</Text>

      <FlatList
        data={grupos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={{ width: '100%' }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Button title="Criar Grupo" onPress={() => navigation.navigate('CreateScreen')} />
    </View>
  );
}
