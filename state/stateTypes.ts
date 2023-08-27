export interface Account {
  tipo_letras: string,
  moneda: string,
  n: string
}

export interface RootState {
  accounts: Account[]
}
