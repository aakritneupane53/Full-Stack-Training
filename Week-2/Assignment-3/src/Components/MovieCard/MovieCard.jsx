import './movieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-grid-card">

      <div
        className="poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`
        }}
      />

      <div className="movie-info">
        <h3 className="title">{movie?.title}</h3>

        <div className="meta">
          <span>⭐ {movie?.vote_average}</span>
          <span>{movie?.release_date}</span>
        </div>

        <p className="overview">
          {movie?.overview}
        </p>
      </div>

    </div>
  )
}

export default MovieCard