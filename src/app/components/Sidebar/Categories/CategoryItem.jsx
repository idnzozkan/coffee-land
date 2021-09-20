import React from 'react'
import { useDispatch } from 'react-redux'
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
        <div onClick={handleSelection}>
            {isSelected ? (<b><span>{name}</span></b>) : <span>{name}</span>}
        </div>
    )
}

export default CategoryItem
