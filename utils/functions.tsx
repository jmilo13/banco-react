export const getPageItems = (items: []) => {
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

export const getAccountType = (type: string) => {
  switch (type) {
    case "CC":
      return "Cuenta Corriente"
      break
    case "CA":
      return "Caja de Ahorro"
      break
    default:
      console.error("No es una cuenta corriente ni caja de ahorro")
  }
}

export const getCurrency = (currency: string) => {
  switch (currency) {
    case "$":
      return "Pesos"
      break
    case "u$s":
      return "Dolares"
      break
    default:
      console.error("No es una moneda válida")
  }
}