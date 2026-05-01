import { useState } from 'react'


import './App.css'
import {Searchbar, Trending, MovieGrid, LoadingPage, ErrorPage} from './Components/exportHandler.js'
import { useEffect } from 'react'

function App() {
  const [search, setSearch] = useState("")
  const [popularMovies, setPopularMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

 

  useEffect(()=>{
    async function fetchPopularMovieList(){
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
        }

    };
    setIsLoading(true)
    try {
      
      const response = await fetch(url, options);
      if(!response.ok) throw new Error("Something went wrong while fetching the popular movies");
      const data = await response.json();
      if(!data) throw new Error("Something went wrong with data");
      const results = data.results


      const popularMoviesData = results.slice(0,5);
      const moviesData = results.slice(5,19);

      console.log(popularMoviesData)


      setPopularMovies(()=>([...popularMoviesData]))
      setMovies(()=>([...moviesData]))
    } catch (error) {
      setError(error)
      
    }
    finally{
      setIsLoading(false)
      
    }
  }
  fetchPopularMovieList()
  },[])

  return (
   <>
  <Searchbar search={search} setSeacrh={setSearch} />

  {isLoading ? (
    <LoadingPage />
  ) : error ? (
    <ErrorPage message={error.message??null} />
  ) : (
    <>
      <Trending popularMovies={popularMovies || []} />
      <MovieGrid movies={movies || []} />
    </>
  )}
</>
  )
}

export default App
