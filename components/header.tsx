import React from 'react'
import Image from 'next/image'


export default function Header() {

  return (
    <>
      <header>
        <Image
          src="/images/logo.png"
          width={150}
          height={60}
          alt="NCR"
        />
      </header>
      <style jsx>
        {`
        header {
          display: flex;
          align-items: center;
          background-color: #54b948;
          padding: 10px;
        }
        `}
      </style>
    </>
  )
}