const TrendingMovieCard = ({ movie }) => {
  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="movie-card__overlay" />

      <div className="movie-card__info">
        <h2>{movie?.title}</h2>
        <p>{movie?.overview}</p>
      </div>

      <div className="ratings">
        <span>{movie?.vote_average}</span>
        <span>{movie?.release_date}</span>
      </div>
    </div>
  )
}

export default TrendingMovieCard