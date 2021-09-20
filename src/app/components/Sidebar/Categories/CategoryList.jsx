import React, { useState } from 'react'
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
        <div>
            {categories.map(category => (
                <CategoryItem categories={categories} setCategories={setCategories} name={category.name} isSelected={category.isSelected} key={category.name} />
            ))}
        </div>
    )
}

export default CategoryList
