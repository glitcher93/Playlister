import './Playlist.scss'

function Playlist() {
    return (
        <div class="playlist">
            <input 
            value="New Playlist" 
            name='playlist-name'
            id='playlist-name'
            className='playlist__input'
            />
            {/* TrackList */}
            <button className="playlist__button">
                Save to Spotify
            </button>
        </div>
    )
}

export default Playlist;