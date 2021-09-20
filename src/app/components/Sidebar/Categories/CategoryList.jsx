import React, { useState } from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'

const CategoryList = () => {
    const [categories, setCategories] = useState(
        [
            { name: 'All Coffees', isSelected: true },
            { name: 'Hot', isSelected: false, },
            { name: 'Iced', isSelected: false, }
        ]
    )

    return (
        <CategoryListContainer>
            {categories.map(category => (
                <CategoryItem categories={categories} setCategories={setCategories} name={category.name} isSelected={category.isSelected} key={category.name} />
            ))}
        </CategoryListContainer>
    )
}

const CategoryListContainer = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 1.5rem;
    background: white;
    min-height: 15rem;
`

export default CategoryList
