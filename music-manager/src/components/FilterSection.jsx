import { genres } from "../lists"

const FilterSection = ({changeTitleFilter, changeGenreFilter}) => {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-wrapper__title">Filter</h2>
      <input className="filter-input" onChange={e => changeTitleFilter(e.target.value.toLowerCase())}  placeholder="By title"/>
      <div>
        <button className="genre-filter-button" key="none" value={""} onClick={e => changeGenreFilter(e.target.value)}>None</button>
        {genres.map(genre =>
           <button className="genre-filter-button" value = {genre} onClick={e => changeGenreFilter(e.target.value)} key = {genre}>{genre}</button>)}
      </div>
    </div>
  )
}

export default FilterSection