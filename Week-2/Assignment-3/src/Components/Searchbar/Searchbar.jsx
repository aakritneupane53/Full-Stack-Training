import { TextAlignJustify, Search, CircleUserRound } from 'lucide-react'
import './searchbar.css'

const Searchbar = ({search, setSearch, fetchMoviesBySearch}) => {




  return (
    <nav className='search-bar'>
      
      <section className='left'>
        <div className='menu-container'>
          <TextAlignJustify />
        </div>

        <div className='logo'>
          MovieLi <span>FY</span>
        </div>
      </section>

      <section className='search-box hidden'>
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(event)=>{
            if(event.key === 'Enter')
              fetchMoviesBySearch();
          }}
        />
        <Search className="search-icon" onClick={()=>fetchMoviesBySearch()}/>
      </section>

      <section className='right hidden'>
        <CircleUserRound />
      </section>

    </nav>
  )
}

export default Searchbar