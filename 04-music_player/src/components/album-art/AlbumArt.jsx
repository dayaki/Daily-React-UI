import React from 'react';
import './AlbumArt.scss';

const AlbumArt = (props) => {
  return (
    <div className="albumArt">
      <div className="inner1">
        <div className="inner2">
          <div className="inner3">
            <img src={ props.image } alt="Album art cover"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumArt;