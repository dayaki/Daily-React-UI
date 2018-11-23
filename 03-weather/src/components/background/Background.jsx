import React from 'react';
import './Background.scss';

const Background = (props) => {
  return (
    <React.Fragment>
      <div className={'wrapper ' + (props.day === 'am' ? 'day' : 'night')}>
        <div className="overlay blue"></div>
      </div>
    </React.Fragment>
  )
}

export default Background;