import "./App.css";
import Form from "./components/Form";
import { albums } from "./lists";
import { useState } from "react";
import "./index.css";
import DisplayAlbums from "./components/DisplayAlbums";

function App() {
  const [albumsList, setAlbums] = useState(albums);

  const handleAddAlbum = (newAlbum) => {
    if (albumsList.length > 9) {
      alert("Oops. Can't add more than 10 albums");
      return;
    }

    let maxId = Math.max(...albumsList.map((o) => o.id));
    newAlbum.id = maxId + 1;
    setAlbums([...albumsList, newAlbum]);

    console.log("albumsList", albumsList);
  };

  return (
    <div className="App">
      <Form handleAddAlbum={handleAddAlbum}></Form>
      <DisplayAlbums albumsList={albumsList} />
    </div>
  );
}

export default App;
