import React from 'react'
import { DataCard } from '../state/stateTypes'
import { getAccountType } from '../utils/functions'


export default function Card(data: DataCard) {
  let type: string = getAccountType(data.accountType)

  return (
    <>
      <div className='card'>
        <h2 className='card__title'>{type}</h2>
        <p>Nro: {data.number}</p>
      </div>
      <style jsx>
        {`
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 250px;
          background-color: #54b948;
          padding: 30px;
          text-align: center;
          color: #fff;
          cursor: pointer;
        }
        .card__title {
          font-size: 22px;
        }
        `}
      </style>
    </>
  )
}