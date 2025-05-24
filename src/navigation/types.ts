// src/navigation/types.ts

export type Grupo = {
  id: string;
  nome: string;
  participantes: string[];
};

export type Despesa = {
  descricao: string;
  valor: number;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  GrupoScreen: undefined;
  CreateScreen: undefined;
  EditScreen: { grupo: Grupo };
  DespesasScreen: { grupo: Grupo };
};
