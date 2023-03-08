const DisplayAlbums = ({albumsList}) => {
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

  return (
    <div>
      {albumsList.map((album)=> {
      return <p className={(album.addDate.getMonth() === today.getMonth() && album.addDate.getDay() === today.getDay() && album.addDate.getFullYear() === today.getFullYear()) ? "album-added-today" : ""} 
      key = {album.id}> {JSON.stringify(album)}</p>})}
    </div>
  )
}

export default DisplayAlbums