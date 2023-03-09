import { genres } from "../lists"

const FilterSection = ({changeTitleFilter, changeGenreFilter}) => {
  return (
    <div>
      <p>Filter</p>
      <input className="filter-input" onChange={e => changeTitleFilter(e.target.value.toLowerCase())}  placeholder="By title"/>
      <div>
        <button key="none" value={""} onClick={e => changeGenreFilter(e.target.value)}>None</button>
        {genres.map(genre =>
           <button value = {genre} onClick={e => changeGenreFilter(e.target.value)} key = {genre}>{genre}</button>)}
      </div>
    </div>
  )
}

export default FilterSection