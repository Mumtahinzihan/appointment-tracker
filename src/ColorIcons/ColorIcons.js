import React from 'react';
import './ColorIcons.css';
export default function colorIcons() {
    return (
      <div className='container'>
        <div className='colours'><p className='square blue'></p>Adherence</div>
        <div className='colours'><p className='square green'></p>Combination therapy</div>
        <div className='colours'><p className='square yellow'></p>Dosing</div>
        <div className='colours'><p className='square red'></p>Guideline</div>
        <div className='colours'><p className='square purple'></p>Safety</div>
        <div className='colours'><p className='square grey'></p>Other</div>
      </div>
    )
  }