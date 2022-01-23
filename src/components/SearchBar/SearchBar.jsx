import './SearchBar.scss';

function SearchBar() {
    return (
        <div className='search-bar'>
            <input 
            type="text" 
            name="search" 
            id="search"
            className='search-bar__input' 
            placeholder='Enter A Song, Album, or Artist' 
            />
            <button className='search-bar__button'>
                Search
            </button>
        </div>
    )
}

export default SearchBar;