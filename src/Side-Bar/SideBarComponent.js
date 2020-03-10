import React from 'react';
import SideBar from '../Side-Bar/SideBar';

export default function SideBarComponent() {
  return (
    <div className="side-bar">
      <SideBar head='Welcome' subHead='Andy Repp' />
      <SideBar head='Metrics' subHead='Overview' subHead2='Detailing' subHead3='Calls' />
      <SideBar head='Information' subHead='About profiles' subHead2='Detailing Targets' />
    </div >
  )
}