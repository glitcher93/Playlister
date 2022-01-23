import './SearchResults.scss';
import TrackList from '../TrackList';

function SearchResults({ searchResults }) {
    return (
        <div className="search-results">
            <h2 className='search-results__title'>Results</h2>
            <TrackList tracks={searchResults} />
        </div>
    )
}

export default SearchResults;