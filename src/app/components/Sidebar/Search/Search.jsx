import React from 'react'
import { useDispatch } from 'react-redux'
import { loadSearchedTerm } from '../../../store/actions/searchActions'

const Search = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(loadSearchedTerm(e.target.value))
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default Search
