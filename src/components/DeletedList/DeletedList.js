import React from "react";

function DeletedList({ removedPhotos, heading }) {
  return (
    <div>
      <h1>{heading}</h1>
      <ol>
        {removedPhotos.map((removedPhoto, index) => (
          <li key={index}>{removedPhoto.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default DeletedList;
