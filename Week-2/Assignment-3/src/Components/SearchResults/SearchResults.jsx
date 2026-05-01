import './searchResults.css'

const SearchResults = ({ query, results }) => {
            if (results.length === 0) {
  return <p>No results found for "{query}"</p>
}
  return (
    <div className="search-results-page">


      <h2 className="heading">
        Results for: <span>"{query}"</span>
      </h2>

      <p className="count">
        {results.length} result{results.length !== 1 && 's'} found
      </p>

      <div className="results-grid">
        {results.map((movie) => (
          <div key={movie.id} className="result-card">

            <div
              className="poster"
              style={{
                backgroundImage: movie.poster_path
                  ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
                  : 'none'
              }}
            >
              {!movie.poster_path && (
                <div className="no-image">No Image</div>
              )}
            </div>

            <div className="info">
              <h3>{movie.title}</h3>

              <div className="meta">
                <span>⭐ {movie.vote_average || 'N/A'}</span>
                <span>{movie.release_date || 'Unknown'}</span>
              </div>

              <p className="overview">
                {movie.overview || 'No description available.'}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default SearchResults