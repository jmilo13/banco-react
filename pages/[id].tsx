import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Account } from '../state/stateTypes'
import { getAccountType, getCurrency } from '../utils/functions'

const AccountPage = () => {
  const router = useRouter();
  const allPages = useSelector((state: Account[][]) => state)
  const { id, page } = router.query;
  const pageNumber = parseInt(page as string);

  const data = allPages[pageNumber]?.filter(account => account.id == id)
  const type = getAccountType(data !== undefined ? data[0].tipo_letras : "")
  const currency = getCurrency(data !== undefined ? data[0].moneda : "")
  const cash = data !== undefined ? data[0].saldo : ""
  const accountNumber = data !== undefined ? data[0].n : ""


  console.log(data)
  return (
    <div className="account">
      <p>Consulta de Saldo</p>
      <h2>Este es tu saldo actual</h2>
      <div className='account__info'>
        <p>Saldo de la cuenta: {currency}{cash}</p>
        <p>Tipo de cuenta: {type} en {currency}</p>
        <p>Número de cuenta: {accountNumber}</p>
      </div>
      <button className='buttonBack'><Link href="/">Salir</Link></button>
      <style jsx>
        {`
          .account {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            width: fit-content;
            margin: 40px auto 0;
            text-align: center;
          }
          .account__info {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: fit-content;
            margin-top: 50px;
            text-align: left;
          }
          .buttonBack {
            border: none;
            background-color: #54b948;
            padding: 10px;
            font-size: 15px;
            color: #fff;
            border-radius: 4px;
            position: absolute;
            bottom: 50%;
            left: 30px
          }
          `}
      </style>
    </div>

  );
};

export default AccountPage;
