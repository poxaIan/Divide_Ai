import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { globalStyles } from '../../styles/global';
import { styles } from './styles';
import { Despesa } from '../../navigation/types';

const despesas: Despesa[] = [];

type Props = NativeStackScreenProps<RootStackParamList, 'DespesasScreen'>;

export default function DespesasScreen({ route, navigation }: Props) {
  const { grupo } = route.params;

  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>Despesas - {grupo.nome}</Text>

      {despesas.length === 0 ? (
        <Text style={styles.emptyText}>Nenhuma despesa registrada.</Text>
      ) : (
        <FlatList
          data={despesas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.despesaItem}>
              <Text>{item.descricao} - R$ {item.valor}</Text>
            </View>
          )}
        />
      )}

      <Button title="Adicionar Despesa" onPress={() => {}} />
    </View>
  );
}
