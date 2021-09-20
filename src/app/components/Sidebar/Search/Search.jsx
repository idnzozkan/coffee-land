import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { loadSearchedTerm } from '../../../store/actions/searchActions'

const Search = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(loadSearchedTerm(e.target.value))
    }

    return (
        <SearchContainer>
            <h1>CoffeeLand</h1>
            <input type="text" placeholder='Search' onChange={handleChange} />
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(247,137,100);
    background: linear-gradient(90deg, rgba(247,137,100,1) 0%, rgba(255,170,143,1) 100%);   
    border-radius: 1.5rem;
    padding: 2rem;

    h1 {
        user-select: none;
        color: white;
        
        @media (max-width: 1200px) {
            font-size: 2.5rem;
        }

        @media (max-width: 960px) {
            font-size: 3.2rem;
        }
    }

    input {
        padding: 1rem;
        width: 90%;
        border-radius: 0.5rem;
        border: 1px solid #da6f4c;

        &:focus {
            outline: none;
        }
    }
`

export default Search
