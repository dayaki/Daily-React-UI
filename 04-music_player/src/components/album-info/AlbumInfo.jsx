import React from 'react';
import './AlbumInfo.scss';

const AlbumInfo = (props) => {
  return (
    <div className="albumInfo">
      <h3>{ props.title }</h3>
      <p>{ props.artist }</p>
    </div>
  )
}

export default AlbumInfo;