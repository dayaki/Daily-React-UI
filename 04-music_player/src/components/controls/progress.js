import React from 'react'

const Progress = (props) => {
  const style = {
    width: props.duration.style + '%'
  }
  return (
    <div className="audio-progress-bar">
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={style} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="info">
        <p>{ props.duration.current }</p>
        <p>{ props.duration.end }</p>
      </div>
    </div>
  )
}

export default Progress;