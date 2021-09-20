import React from 'react'
import styled from 'styled-components'

const CoffeeCard = ({ title, description, ingredients }) => {
    return (
        <CardContainer>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>Ingredients: {ingredients.map((ingredient) => (<Ingredient>{ingredient}</Ingredient>))}</span>
        </CardContainer >
    )
}

const CardContainer = styled.div`
    padding: 2rem;
    margin-bottom: 3rem;
    border-radius: 1.5rem;
    width: 96%;
    background: white;
    height: 20rem;
    transition: 0.1s ease;

    &:hover {
        -webkit-box-shadow: 0px 8px 18px -4px rgba(0,0,0,0.03); 
        box-shadow: 0px 8px 18px -4px rgba(0,0,0,0.03); 
    }

    p {
        margin: 2rem 0;
        color: #333
    }

    span {
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 1.5rem;
    }

    @media (max-width: 660px) {
      width: 93.5%;
      height: 30vh;

      span {
        font-size: 1.1rem;
      }

    }    

`

const Ingredient = styled.div`
    background-color: #c46f5614;
    color: #da6f4c;
    padding: 0.75rem;
    margin: 0 1rem;
    border-radius: 1.5rem;
    text-align: center;

    @media (max-width: 660px) {
      margin: 0 0.2rem;
    }    
`

export default CoffeeCard
