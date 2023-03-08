import { useState } from "react"
import { genres } from "../lists"

const GenreDropdown = (props) =>{
  const [isOpen, setIsOpen] = useState(false)
  const [genre, setGenre] = useState("")

  const handleGenreSelect = (item) => {
    setGenre(item)
    console.log(item) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(genre);
  }

  return (
    <div>
      <button className="genre-button dropdown-button" onClick={()=>setIsOpen((prev) => !prev)}>Dropdown (genre)</button>
      {isOpen && <form className="dropdown-container" onSubmit={handleSubmit}>
          {genres.map((item) => (
            <button className="genre-button" type="submit" onClick = {() => handleGenreSelect(item)} key={item}>{item}</button>
          ))}
        </form>}

    </div>
  )
}

const DropdownItem = (props) => {
  return (
    <li>
      <button>{props.genre}</button>
    </li>
  )
}

export default GenreDropdown
