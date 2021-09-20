import * as types from "../actions/types"

const initialState = {
  all: [],
  filtered: []
}

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COFFEES:
      return {
        ...state,
        all: action.payload
      }
    case types.FETCH_COFFEES_BY_CATEGORY:
      return {
        ...state,
        filtered: action.payload
      }
    default:
      return state
  }
}

export default coffeeReducer
