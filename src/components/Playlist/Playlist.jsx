import './Playlist.scss';
import TrackList from '../TrackList';

function Playlist({ playlistName, playlistTracks }) {
    return (
        <div class="playlist">
            <input 
            value="New Playlist" 
            name='playlist-name'
            id='playlist-name'
            className='playlist__input'
            />
            <TrackList tracks={playlistTracks} />
            <button className="playlist__button">
                Save to Spotify
            </button>
        </div>
    )
}

export default Playlist;