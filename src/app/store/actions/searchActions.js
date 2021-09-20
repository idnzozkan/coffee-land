import * as types from "./types"

export const loadSearchedTerm = term => dispatch => {
  dispatch({
    type: types.SET_SEARCHED_TERM,
    payload: term
  })
}
