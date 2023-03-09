const DisplayAlbums = ({albumsList, setAlbums}) => {
  console.log(albumsList)
  albumsList.sort((a,b) => {
    let y1 = a.year;
    let y2 = b.year;

    let a1 = a.author;
    let a2 = b.author;

    let t1 = a.title;
    let t2 = b.title;

    if(y1<y2) return -1;
    if(y1>y2) return 1;

    if(a1<a2) return -1;
    if(a1>a2) return 1;

    if(t1<t2) return -1;
    if(t1>t2) return 1;
    return 0
  })

  let today = new Date()

  const handleRemove = (albumIdToRemove) => {
    setAlbums((current) => 
      current.filter((album) => album.id !== albumIdToRemove)
    )
  }

  return (
    <div className = "album-display-wrapper">
      {albumsList.map((album)=> {
      return <div key={album.id} className={(album.addDate.getMonth() === today.getMonth() && album.addDate.getDay() === today.getDay() && album.addDate.getFullYear() === today.getFullYear()) ? "album-container album-added-today" : "album-container"}> 
      <div key = {album.id}> 
        <h3 key={`title${album.id}`} className="album-container__text">{album.title}</h3>
        <p key={`author${album.id}`}  className="album-container__text">{album.author}</p> 
        <p key={`year${album.id}`}  className="album-container__text">{album.genre}</p> <p className="album-container__text">{album.year}</p>
      </div>
        <button key={`remove${album.id}`}  onClick={() => handleRemove(album.id)} className="remove-album-button">Remove</button>
     </div>})}
    </div>
  )
}

export default DisplayAlbums