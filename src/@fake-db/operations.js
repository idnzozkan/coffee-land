import getCoffeeData from "./data"

export const getCoffees = () => {
  const coffees = getCoffeeData()
  return coffees ? coffees : null
}

export const getCoffeesByCategory = category => {
  const coffees = getCoffeeData()
  const filteredCoffees = coffees.filter(coffee => coffee.category === category)

  return filteredCoffees ? filteredCoffees : null
}
