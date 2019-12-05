import React, { useState, useEffect } from "react";
import PhotosList from "./components/PhotosList";
import DeletedList from "./components/DeletedList";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [removedPhotos, setRemovedPhotos] = useState([]);
  const size = 20;

  const removePhoto = photoSelected => {
    const updatedPhotos = photos.filter(photo => photoSelected.id !== photo.id);
    setPhotos(updatedPhotos);
    setRemovedPhotos(removedPhotos.concat(photoSelected));
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        setPhotos(response.data.slice(0, size));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PhotosList photos={photos} removePhoto={removePhoto} heading="Photos" />
      <DeletedList removedPhotos={removedPhotos} heading="Removed Photos" />
    </div>
  );
}

export default App;
