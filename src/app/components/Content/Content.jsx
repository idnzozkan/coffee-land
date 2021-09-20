import React, { useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { loadCoffees } from '../../store/actions/coffeeActions'
import CoffeeCard from "./CoffeeCard"

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
    <ContentContainer>
      {
        coffees
          .filter(coffee => coffee.title.toLowerCase().includes(searchedTerm.toLowerCase()))
          .map(coffee => (
            <CoffeeCard title={coffee.title}
              description={coffee.description}
              ingredients={coffee.ingredients}
              key={coffee.id}
            />)
          )
      }
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  width: 53vw;
  border-radius: 1.5rem;
  margin-left: 5rem;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 0;
    margin-top: 5rem;
  }
`

export default Content
