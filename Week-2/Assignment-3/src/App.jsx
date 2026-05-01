import { useState } from 'react'


import './App.css'
import {Searchbar, Trending, MovieGrid, LoadingPage, ErrorPage, SearchResults} from './Components/exportHandler.js'
import { useEffect } from 'react'

function App() {
  const [search, setSearch] = useState("")
  const [searchedResults, setSearchResults] = useState([])
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



    async function fetchMoviesBySearch(){
    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=1&include_adult=false`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
      }
    }
    
    setIsLoading(true)
      try{
        const response = await fetch(url, options);
        if(!response.ok) throw new Error("Cannot finc the movie with the keyword")
        const data = await response.json()
        if(!data) throw new Error("Cannot finc the movie with the keyword")
        console.log(data)
      setSearchResults([...data.results])
      }
      catch(err){
        console.log(err)
        setError(err)
      }
      finally{
        setIsLoading(false)
      }
      
  };

  return (
   <>
  <Searchbar
    search={search}
    setSearch={setSearch}
    fetchMoviesBySearch={fetchMoviesBySearch}
  />

  {isLoading ? (
    <LoadingPage />
  ) : error ? (
    <ErrorPage message={error?.message || "Something went wrong"} />
  ) 
  : searchedResults.length>0 ? (
    <SearchResults
      query={search}
      results={searchedResults || []}
    />) 
    : (
    <>
      <Trending popularMovies={popularMovies || []} />
      <MovieGrid movies={movies || []} />
    </>
  )}
</>
  )
}

export default App
