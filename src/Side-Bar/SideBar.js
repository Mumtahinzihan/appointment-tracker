import React from 'react';
import './SideBar.css';
export default function SideBar(props) {
    return (
    <span>
      <p>{props.head}</p>
      <h4><a href='#'>{props.subHead}</a></h4>
      <h4><a href='#'>{props.subHead2}</a></h4>
      <h4><a href='#'>{props.subHead3}</a></h4>
    </span>
    )
  }