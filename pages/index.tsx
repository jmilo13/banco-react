import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../state/reducers'
import Header from '../components/header'

import axios from 'axios'
import Paginator from '../components/pagination'
import { Account } from '../state/stateTypes'

export default function home() {
  const accounts = useSelector((state: Account[]) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API)
      .then((response) => dispatch(add(response?.data?.cuentas)))
  }, [])

  return (
    <>
      <Header />
      <main className='accounts'>
        <p className='accounts__description'>Consulta de saldo</p>
        <h1 className='accounts__title'>Seleccione la cuenta a consultar</h1>
        {accounts.length > 0 ? (
          <Paginator accounts={accounts} />
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