import React from 'react';
import Progress from './progress';

// SVGs
import heart from '../../images/heart.svg';
import play from '../../images/play.svg';
import pause from '../../images/pause.svg';
import fastforward from '../../images/forward.svg';
import rewind from '../../images/rewind.svg';
import shuffle from '../../images/shuffle.svg';


const Controls = (props) => {
  return (
    <div className="controls">
      <Progress duration={props.duration} />
      <div className="btns">
        <button>
          <img src={heart} alt="like"/>
        </button>
        <button onClick={props.rewind}>
          <img src={rewind} alt="rewind"/>
        </button>
        { props.playing ? 
            <button onClick={props.pause}><img src={pause} alt="play"/></button> : 
            <button onClick={props.play}><img src={play} alt="play"/></button>
        }
        <button onClick={props.forward}>
          <img src={fastforward} alt="fast forward"/>
        </button>
        <button>
          <img src={shuffle} alt="Shuffle"/>
        </button>
      </div>
    </div>
  )
}

export default Controls;