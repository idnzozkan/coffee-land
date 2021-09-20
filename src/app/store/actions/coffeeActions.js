import * as types from "./types"
import { getCoffees, getCoffeesByCategory } from "../../../@fake-db/operations"

export const loadCoffees = () => dispatch => {
  const coffees = getCoffees()

  dispatch({
    type: types.FETCH_COFFEES,
    payload: coffees
  })
}

export const loadFilteredCoffees = category => dispatch => {
  const filteredCoffees = getCoffeesByCategory(category)

  dispatch({
    type: types.FETCH_COFFEES_BY_CATEGORY,
    payload: filteredCoffees
  })
}
