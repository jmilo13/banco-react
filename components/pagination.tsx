import React, { useState } from 'react'
import { Account } from '../state/stateTypes'
import { useSelector } from 'react-redux'
import Link from 'next/link';

import Card from './Card'

export default function Paginator() {
  const [page, setPage] = useState(0)
  const allPages = useSelector((state: Account[][]) => state)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const action = target.dataset?.action
    if (action == "prev") {
      setPage(page - 1)
    } else if (action == "next") {
      setPage(page + 1)
    }
  }
  return (
    <>
      <div className='accounts__list'>
        {page > 0 && (<button className='buttonCard' onClick={handleClick} data-action="prev">&lt;&lt; Opciones Anteriores</button>)}
        {allPages[page].map((account: Account, index: number) => <Link key={account.id} href={`/[id]?page=${page}`} as={"/" + account.id}><Card key={"card-" + index} accountType={account.tipo_letras} number={account.n} /></Link>)}
        {page < allPages.length - 1 && (<button className='buttonCard' onClick={handleClick} data-action="next">Más Opciones &gt;&gt;</button>)}
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
            font-size: 16px;
            font-weight: 700;
          }
          `}
      </style>
    </>
  )
}