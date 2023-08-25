export interface Accounts {
  tipo_letras: string,
  moneda: string,
  n: string
}

export interface RootState {
  accounts: Accounts[]
}
