const FilterSection = ({changeTitleFilter}) => {
  return (
    <div>
      <p>Filter</p>
      <input onChange={e => changeTitleFilter(e.target.value)}  placeholder="By title"/>
      <button>By genre</button>
    </div>
  )
}

export default FilterSection