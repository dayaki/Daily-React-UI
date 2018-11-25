import React from 'react'
import './Wavvy.scss';

const Wavvy = () => {
  return (
    <div className="wavvy">
      <div className="left">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-22.96,119.89 C133.74,-124.83 33.16,234.38 564.50,84.38 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff' }}></path>
        </svg>
      </div>
      <div className="center">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-23.68,183.05 C149.99,150.00 194.24,-54.77 519.31,200.81 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff' }}></path>
        </svg>
      </div>
      <div className="right">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-15.66,114.95 C240.15,148.52 357.50,-73.52 533.16,82.39 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#fff'}}></path>
        </svg>
      </div>
    </div>
  )
}

export default Wavvy;