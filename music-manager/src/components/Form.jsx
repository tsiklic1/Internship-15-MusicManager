import { useState } from "react"
import {albums, genres} from "../lists";
import GenreDropdown from "./GenreDropdown";

const Form = ({handleAddAlbum})=>{
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [year, setYear] = useState("")
  const [emptyFieldExists, setEmptyFieldExists] = useState(false)

  const handleChangeOnYear = (value) => {
    if(isNaN(+value)){
      console.log("Input is not number")
      return
    }
    setYear(+value)
  }

  const handleSubmit = (e)=>{
    console.log(genre)
    
    setEmptyFieldExists(false)

    if(!title.length || !author.length || !genre.length || year === ""){
      console.log("something is empty")
      setEmptyFieldExists(true)
      return;
    }

    let addDate = new Date()

    handleAddAlbum({title, author, genre, year, addDate})
  }

  const getData = (data) => { 
    console.log("Coming from Form.jsx", data);
    setGenre(data)

  }

  return (<div className="album-input-form"  id = "inputForm" >
    <p>Album info</p>
    <input className="album-info-input" type="text " placeholder="Title" value ={title} onChange = {e => setTitle(e.target.value)} />
    <input className="album-info-input" type="text " placeholder="Author" value ={author} onChange = {e => setAuthor(e.target.value)} />
    <input className="album-info-input" type="text " placeholder="Year" value ={year} onChange = {e => handleChangeOnYear(e.target.value)} />
    <GenreDropdown onSubmit = {getData}/>
    
     <button onClick={(e) => handleSubmit(e)}>Add</button>
     <p style={{color: emptyFieldExists ? "red" : "transparent"}}>No field can be empty</p>
     <p>values to be submitted <br/> title: {title} <br/> author: {author} <br/> year: {year} <br/> genre: {genre}</p>
    </div>);
}

export default Form