import React from 'react';
import './Information.css';
export default function Information() {
    return (
          <div className="info">
            <h4>Overview</h4>
            <h4>Next call </h4>
            <div className='row'>
              <h4>Date:</h4>
              <p>Tomorrow, 3pm <br />12 Nov 2017</p>
            </div>
            <div className='row'>
              <h4>Account:</h4>
              <p>Dr. Clinton Ackerman</p>
            </div>
            <div className='row'>
              <h4>Speciality: </h4>
              <p>Respiratory therapist <br /> Assistive therapy</p>
            </div>
            <div className='row'>
              <h4>Profile:</h4>
              <p>Confinent</p>
            </div>
          </div>
    )
}