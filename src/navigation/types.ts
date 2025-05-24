export type Grupo = {
  id: string;
  nome: string;
  participantes: string[];
};

export type Despesa = {
  descricao: string;
  valor: number;
  pagoPor: string;
  data: Date;
  participantes: string[];
};

export type RootStackParamList = {
  HomeScreen: undefined;
  GrupoScreen: undefined;
  CreateScreen: undefined;
  EditScreen: { grupo: Grupo };
  DespesasScreen: { grupo: Grupo; novasDespesas?: Despesa[] };
  AddDespesaScreen: { grupo: Grupo };
};
