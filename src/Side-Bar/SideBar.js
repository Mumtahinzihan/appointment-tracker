import React from 'react';
import './SideBar.css';
export default function SideBar(props) {
    return (
    <span>
      <p>{props.head}</p>
      <h4>{props.subHead}</h4>
      <h4>{props.subHead2}</h4>
      <h4>{props.subHead3}</h4>
    </span>
    )
  }