import React from 'react';
import photos from '../photos';

export default function MainDisplay() {
  console.log(photos);
  return (
    <div>
      {photos.map((photo) => (
        <img src={photo.src}></img>
      ))}
    </div>
  );
}
