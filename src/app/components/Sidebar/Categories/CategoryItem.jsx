import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loadFilteredCoffees } from '../../../store/actions/coffeeActions'

const CategoryItem = ({ categories, setCategories, name, isSelected }) => {
    const dispatch = useDispatch()

    const handleSelection = () => {
        const formattedCategoryName = name.toLowerCase().replace(' ', '-')
        dispatch(loadFilteredCoffees(formattedCategoryName))

        const updatedCategoriesBySelection = categories.map(category => {
            if (category.name === name)
                return { ...category, isSelected: true }

            else
                return { ...category, isSelected: false }
        })

        setCategories(updatedCategoriesBySelection)
    }

    return (
        <StyledCategoryItem isSelected={isSelected} onClick={handleSelection}>
            <span>{name}</span>
        </StyledCategoryItem>
    )
}

const StyledCategoryItem = styled.div`
    padding: 1rem;
    margin-bottom: 0.75rem;
    border-radius: 1.5rem;
    transition: all 0.25s ease-ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #c46f5614;
    }

    ${({ isSelected }) => isSelected && `
        background: #c46f5614;
        
        span {
            font-weight: bold;
        }
    `}
`

export default CategoryItem
