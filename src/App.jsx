import { useState } from 'react';
import Spotify from './utils/Spotify';
import './App.scss';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {

  const [searchResults, setSearchResults] = useState([])

  const [playlistName, setPlaylistName] = useState('New Playlist')

  const [playlistTracks, setPlaylistTracks] = useState([])

  const addTrack = (track) => {
    const foundTrack = playlistTracks.find(savedTrack => savedTrack.id === track.id);
    if (foundTrack) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  }

  const removeTrack = (track) => {
    let tracks = playlistTracks;
    tracks = tracks.filter(playlistTrack => playlistTrack.id !== track.id);
    setPlaylistTracks(tracks);
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist')
      setPlaylistTracks([]);
    })
  }

  const search = (term) => {
    console.log(term);
    Spotify.search(term).then(searchResults => setSearchResults(searchResults));
  }

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Play<span className='header__title--highlight'>list</span>er</h1>
      </header>
      <main className='main'>
        <SearchBar 
        onSearch={search}
        />
        <div className="main__container">
          <SearchResults 
          searchResults={searchResults} 
          onAdd={addTrack}
          />
          <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist} 
          />
        </div>
      </main>
    </>
  );
}

export default App;
