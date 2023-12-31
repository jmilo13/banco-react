import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../state/reducers'

import axios from 'axios'
import Paginator from '../components/pagination'
import { Account } from '../state/stateTypes'
import { getPageItems } from '../utils/functions'

export default function Home() {
  //Para el manejo de error en la peticion d elos datos
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const allPages = useSelector((state: []) => state)

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API)
      .then((response) => {
        const accounts = response?.data?.cuentas
        //Filtra unicamente las Cuentas corrientes, de ahorro y que esten en pesos y dolares
        const validAccounts = accounts?.filter((account: Account) => (account.tipo_letras === 'CC' || account.tipo_letras === 'CA') && (account.moneda === '$' || account.moneda === 'u$s') && account.n.length > 3)
          //Se agrega este ID dado que se encontraron dos cuentas con el mismo numero en la API, por lo cual 
          //no se puede usar este como identificador para abrir el detalle de cada cuenta
          .map((account: Account, index: number) => ({
            ...account,
            id: index + account.n
          }));

        //Setea en el estado las paginas organizadas teniendo en cuenta los botones de paginacion
        const pages: any[] = getPageItems(validAccounts)
        dispatch(add(pages))
      })
      .catch((error) => {
        console.error("La petición falló: " + error.message);
        setError("La petición falló")
      });
  }, [])

  return (
    <>
      <main className='accounts'>
        <p className='accounts__description'>Consulta de saldo</p>
        <h1 className='accounts__title'>Seleccione la cuenta a consultar</h1>
        {allPages.length > 0 ? (
          <Paginator />
        ) : (error ? <span className='error'>Lo sentimos, no podemos mostrar los datos. {error}</span> : <span className="loader"></span>)
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
        .error {
          display: block;
          margin: auto;
          width:400px;
          color: #d50000;
          text-align: center;
          line-height:1.5;
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