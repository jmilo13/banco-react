import React, { useState } from 'react'
import { Account } from '../state/stateTypes'

import Card from '../components/card'

const getPageItems = (items: []) => {
  const cardsNumber = items.length
  const pages = []

  let counter = 0
  if (cardsNumber > 6) {
    for (let i = 0; counter < cardsNumber; i++) {
      if (i == 0) {
        pages.push(items.slice(0, 5))
        counter = counter + 5
      } else if (cardsNumber - 5 > counter) {
        pages.push(items.slice(counter, counter + 4))
        counter = counter + 4
      } else {
        pages.push(items.slice(counter, counter + 5))
        counter = counter + 5
      }
    }
    return pages
  } else {
    return items
  }
}

export default function Paginator({ accounts }) {
  const [page, setPage] = useState(0)
  const validAccounts = accounts.filter((account: Account) => (account.tipo_letras === 'CC' || account.tipo_letras === 'CA') && (account.moneda === '$' || account.moneda === 'u$s') && account.n.length > 3)

  const handleClick = (e) => {
    const action = e.target?.dataset?.action
    if (action == "prev") {
      setPage(page - 1)
    } else if (action == "next") {
      setPage(page + 1)
    }
  }

  const pages: any[] = getPageItems(validAccounts)
  console.log(pages)
  return (
    <>
      <div className='accounts__list'>
        {page > 0 && (<button className='buttonCard' onClick={handleClick} data-action="prev"><h3> &lt;&lt; Opciones Anteriores</h3></button>)}
        {pages[page].map((account: Account, index: number) => <Card key={"card-" + index} accountType={account.tipo_letras} number={account.n} />)}
        {page < pages.length - 1 && (<button className='buttonCard' onClick={handleClick} data-action="next"><h3>Más Opciones &gt;&gt;</h3></button>)}
      </div>
      <style jsx>
        {`
          .accounts__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            max-width: 800px;
            margin: auto;
          }
          .buttonCard {
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
            border: none;
            cursor: pointer;
          }
          `}
      </style>
    </>
  )
}