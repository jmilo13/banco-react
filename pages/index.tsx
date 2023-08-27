import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../state/reducers'
import Header from '../components/header'

import axios from 'axios'
import Paginator from '../components/pagination'
import { Account } from '../state/stateTypes'
import { getPageItems } from '../utils/functions'

export default function home() {
  const dispatch = useDispatch()
  const allPages = useSelector((state: []) => state)

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API)
      .then((response) => {
        const accounts = response?.data?.cuentas
        const validAccounts = accounts.filter((account: Account) => (account.tipo_letras === 'CC' || account.tipo_letras === 'CA') && (account.moneda === '$' || account.moneda === 'u$s') && account.n.length > 3)
        const pages: any[] = getPageItems(validAccounts)
        dispatch(add(pages))
      })
  }, [])

  return (
    <>
      <Header />
      <main className='accounts'>
        <p className='accounts__description'>Consulta de saldo</p>
        <h1 className='accounts__title'>Seleccione la cuenta a consultar</h1>
        {allPages.length > 0 ? (
          <Paginator />
        ) : (
          <span className="loader"></span>
        )
        }
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
        .loader {
          width: 48px;
          height: 48px;
          border: 5px solid #FFF;
          border-bottom-color: #54b948;
          border-radius: 50%;
          display: block;
          margin: auto;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
        }

        @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        } 
        `}
      </style>
    </>
  )
}