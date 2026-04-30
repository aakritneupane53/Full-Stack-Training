import {UserRoundSearch} from 'lucide-react'


const SearchForm = ({city, setCity, handleFormSubmission}) => {
  return (
    <>
      <form className="search-form blur-container">
        <div className="form-input">
          <label htmlFor="cityInput">Please Enter the City</label>
        <input id="cityInput" type="text" placeholder="Kathmandu" value={city} onChange={(event)=>{
          setCity(event.target.value)
        }} />
        </div>
        <button className="submit-btn" onClick={(event)=>{
          event.preventDefault();
          handleFormSubmission()
        }}>Search Weather <span><UserRoundSearch /></span></button>
      </form>
    </>
  )
}

export default SearchForm