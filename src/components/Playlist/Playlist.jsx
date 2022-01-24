import './Playlist.scss';
import TrackList from '../TrackList';

function Playlist({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) {

    const handleNameChange = (event) => {
        onNameChange(event.target.value)
    }

    return (
        <div className="playlist">
            <input 
            value={playlistName} 
            name='playlist-name'
            id='playlist-name'
            className='playlist__input'
            onChange={handleNameChange}
            />
            <TrackList 
            tracks={playlistTracks}
            onRemove={onRemove}
            isRemoval={true}
            />
            <button 
            className="playlist__button"
            onClick={onSave}
            >
                Save to Spotify
            </button>
        </div>
    )
}

export default Playlist;