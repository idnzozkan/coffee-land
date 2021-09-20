import * as types from "../actions/types"

const initialState = {
  term: ""
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCHED_TERM:
      return {
        ...state,
        term: action.payload
      }
    default:
      return state
  }
}

export default searchReducer
