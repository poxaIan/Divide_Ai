import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Despesa } from '../../navigation/types';
import { globalStyles } from '../../styles/global';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'DespesasScreen'>;

export default function DespesasScreen({ route, navigation }: Props) {
  const { grupo } = route.params;

  const [despesas, setDespesas] = useState<Despesa[]>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Carregue despesas da navegação ou fonte externa futuramente
      const novasDespesas = (route.params as any).novasDespesas;
      if (novasDespesas) {
        setDespesas(prev => [...prev, ...novasDespesas]);
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>Despesas - {grupo.nome}</Text>

      {despesas.length === 0 ? (
        <Text style={styles.emptyText}>Nenhuma despesa registrada.</Text>
      ) : (
        <FlatList
          data={despesas}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.despesaItem}>
              <Text>{item.descricao} - R$ {item.valor}</Text>
            </View>
          )}
        />
      )}

      <Button
        title="Adicionar Despesa"
        onPress={() => navigation.navigate('AddDespesaScreen', { grupo })}
      />
    </View>
  );
}
