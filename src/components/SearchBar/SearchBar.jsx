import { useState } from 'react';
import './SearchBar.scss';

function SearchBar({ onSearch }) {

    const [term, setSearchTerm] = useState('')

    const search = () => {
        onSearch(term)
    }

    const handleTermChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className='search-bar'>
            <input 
            value={term}
            type="text" 
            name="search" 
            id="search"
            className='search-bar__input' 
            placeholder='Enter A Song, Album, or Artist'
            onChange={handleTermChange} 
            />
            <button 
            className='search-bar__button'
            onClick={search}
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar;