import { useEffect, useState } from 'react';
import MoviesCard from './Components/MoviesCard';
//43918340
import './App.css'

const APIURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=43918340'

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    setLoading(true)
    const response = await fetch(`${APIURL}&s=${title}`)
    const data = await response.json();
    setLoading(false)
    setData(data.Search);
  }

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    searchMovies('Avengers')
  }, [])

  return (
    <div className='app'>
      <h1 className='heading'>Movie Land</h1>
      <div className='search'>
        <input className='searchInput' value={searchTerm} onChange={changeHandler} type="search" placeholder='Search for movies' />
        <svg onClick={() => searchMovies(searchTerm)} xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      {data?.length > 0 ?
      <div className='container'>
        {loading ? <p>Loading...</p> : data.map(each => {
        return <MoviesCard key={each.imdbID} movie={each} />
       })}
      </div> : <p>No Movies Found</p>}
    </div>
  );
}

export default App;
