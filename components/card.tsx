import React from 'react'
interface Data {
  accountType: string,
  number: string
}

export default function Card(data: Data) {
  let type: string
  switch (data.accountType) {
    case "CC":
      type = "Cuenta Corriente"
      break
    case "CA":
      type = "Caja de Ahorro"
      break
    default:
      console.error("No es una cuenta corriente ni caja de ahorro")
  }

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