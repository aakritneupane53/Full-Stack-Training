import { TextAlignJustify, Search, CircleUserRound } from 'lucide-react'
import './searchbar.css'

const Searchbar = ({search, setSearch}) => {
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
        />
        <Search className="search-icon" />
      </section>

      <section className='right hidden'>
        <CircleUserRound />
      </section>

    </nav>
  )
}

export default Searchbar