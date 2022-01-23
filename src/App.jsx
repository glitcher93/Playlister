import './App.scss';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Play<span className='header__title--highlight'>list</span>er</h1>
      </header>
      <main className='main'>
        <SearchBar />
        <div className="main__container">
          <SearchResults />
          <Playlist />
        </div>
      </main>
    </>
  );
}

export default App;
