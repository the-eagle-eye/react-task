import React from "react";
import styles from "./styles.module.css";

function PhotosItem({ photo, removePhoto }) {
  const handleClick = event => {
    removePhoto(photo);
  };
  return (
    <div>
      <li>
        <div className={styles.photoDescription}>
          <p>ID: {photo.id}</p>
          <p>title: {photo.title}</p>
          <img src={photo.thumbnailUrl}></img>
        </div>
        <button onClick={handleClick}>Remove</button>
      </li>
    </div>
  );
}

export default PhotosItem;
