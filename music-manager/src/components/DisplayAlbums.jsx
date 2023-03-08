const DisplayAlbums = ({albumsList}) => {

  return (
    <div>
      {albumsList.map((album)=> 
      <p key = {album.id}> {JSON.stringify(album)}</p>)}
    </div>
  )
}

export default DisplayAlbums