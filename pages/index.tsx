import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../state/reducers'
import Header from '../components/header'
import { Accounts } from '../state/stateTypes'

import axios from 'axios'
import Card from '../components/card'

export default function home() {
  const accounts: [] = useSelector((state: []) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API)
      .then((response) => dispatch(add(response?.data?.cuentas)))
  }, [])

  const validAccounts = accounts.filter((account: Accounts) => (account.tipo_letras === 'CC' || account.tipo_letras === 'CA') && (account.moneda === '$' || account.moneda === 'u$s') && account.n.length > 3)

  console.log(validAccounts)

  return (
    <>
      <Header />
      <main className='accounts'>
        <p className='accounts__description'>Consulta de saldo</p>
        <h1 className='accounts__title'>Seleccione la cuenta a consultar</h1>
        <div className='accounts__list'>
          {validAccounts.map((account: Accounts) => <Card accountType={account.tipo_letras} number={account.n} />)}
        </div>
      </main>
      <style jsx>
        {`
        .accounts__description {
          text-align: center;
          margin: 30px auto 10px
        }
        .accounts__title {
          text-align: center;
          margin: 0 0 30px
        }
        .accounts__list {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          max-width: 800px;
          margin: auto;
        }
        `}
      </style>
    </>
  )
}