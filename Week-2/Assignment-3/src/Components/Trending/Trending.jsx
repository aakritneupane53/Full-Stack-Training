// Trending.jsx
import TrendingMovieCard from './TrendingMovieCard.jsx'
import './trending.css'
import { useState } from 'react'

const Trending = ({ popularMovies }) => {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % popularMovies.length)
  }

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? popularMovies.length - 1 : prev - 1
    )
  }

  return (
    <div className='carousel-container'>
      
      <button className='nav left' onClick={prev}>‹</button>

      <div className='viewport'>
        <div
          className='track'
          style={{
            transform: `translateX(-${index * 100}vw)`
          }}
        >
          {popularMovies.map((movie) => (
            <TrendingMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      <button className='nav right' onClick={next}>›</button>

    </div>
  )
}

export default Trending