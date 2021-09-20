import { combineReducers } from "redux"
import coffeeReducer from "./coffeeReducer"
import searchReducer from "./searchReducer"

const rootReducer = combineReducers({
  coffees: coffeeReducer,
  search: searchReducer
})

export default rootReducer
