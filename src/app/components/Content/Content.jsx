import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadCoffees } from '../../store/actions/coffeeActions'

const Content = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCoffees())
  }, [])

  const coffees = useSelector(state => {
    if (state.coffees.filtered.length) {
      return state.coffees.filtered
    } else {
      return state.coffees.all
    }
  })

  const searchedTerm = useSelector(state => state.search.term)

  return (
    <div>
      {coffees.filter(coffee => coffee.title.toLowerCase().includes(searchedTerm.toLowerCase())).map(coffee => (<span key={coffee.id}>{coffee.title}</span>))}
    </div>
  )
}

export default Content
