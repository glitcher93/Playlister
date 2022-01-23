import { useState } from 'react';
import './App.scss';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {

  const [searchResults, setSearchResults] = useState([{
    name: 'Track 1',
    artist: 'Lol',
    album: 'Lol',
    id: 1
  }])

  const [playlistName, setPlaylistName] = useState('Yeah')

  const [playlistTracks, setPlaylistTracks] = useState([{
    name: 'Track 2',
    artist: 'Lol',
    album: 'Lol',
    id: 2
  }])

  const addTrack = (track) => {
    const foundTrack = playlistTracks.find(savedTrack => savedTrack.id === track.id);
    if (foundTrack) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  }

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Play<span className='header__title--highlight'>list</span>er</h1>
      </header>
      <main className='main'>
        <SearchBar />
        <div className="main__container">
          <SearchResults 
          searchResults={searchResults} 
          onAdd={addTrack}
          />
          <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks} 
          />
        </div>
      </main>
    </>
  );
}

export default App;
