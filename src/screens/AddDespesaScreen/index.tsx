// src/screens/AddDespesaScreen/index.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { globalStyles } from '../../styles/global';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Grupo } from '../../navigation/types';
import Checkbox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Platform } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'AddDespesaScreen'>;

export default function AddDespesaScreen({ route, navigation }: Props) {
  const { grupo } = route.params;

  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [pagoPor, setPagoPor] = useState(grupo.participantes[0]);
  const [mostrarParticipantes, setMostrarParticipantes] = useState(false);
  const [selecionados, setSelecionados] = useState<string[]>(grupo.participantes);
  const [data, setData] = useState(new Date());
  const [mostrarData, setMostrarData] = useState(false);

  const toggleParticipante = (nome: string) => {
    setSelecionados(prev =>
      prev.includes(nome) ? prev.filter(p => p !== nome) : [...prev, nome]
    );
  };

  const handleAdicionar = () => {
  const novaDespesa = {
    descricao,
    valor: Number(valor),
    pagoPor,
    data,
    participantes: selecionados
  };

  navigation.navigate('DespesasScreen', {
    grupo,
    novasDespesas: [novaDespesa],
  });
};


  return (
    <ScrollView contentContainerStyle={globalStyles.centeredContainer}>
      <Text style={globalStyles.title}>Adicionar Despesa</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Título da despesa"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Valor (R$)"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={() => setMostrarParticipantes(!mostrarParticipantes)}>
        <Text style={styles.accordionTitle}>Pago por: {pagoPor}</Text>
      </TouchableOpacity>

      {mostrarParticipantes && (
        <View style={styles.accordionBody}>
          {grupo.participantes.map(nome => (
            <TouchableOpacity key={nome} onPress={() => setPagoPor(nome)}>
              <Text style={{ padding: 5, fontWeight: nome === pagoPor ? 'bold' : 'normal' }}>{nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity onPress={() => setMostrarData(true)}>
        <Text style={styles.dateText}>Quando: {data.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {mostrarData && (
        <DateTimePicker
          value={data}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event: any, selectedDate?: Date) => {
            setMostrarData(false);
            if (selectedDate) setData(selectedDate);
          }}
        />

      )}

      <Text style={styles.checkboxTitle}>Dividir entre:</Text>
      {grupo.participantes.map(nome => (
        <View key={nome} style={styles.checkboxContainer}>
          <Checkbox
            value={selecionados.includes(nome)}
            onValueChange={() => toggleParticipante(nome)}
          />
          <Text>{nome}</Text>
        </View>
      ))}

      <Button
  title="Adicionar Despesa"
  onPress={handleAdicionar}
/>



    </ScrollView>
  );
}
