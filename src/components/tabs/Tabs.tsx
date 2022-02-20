import React from 'react';
import {Outlet} from 'react-router-dom'

import TavNav from './TabNav'

const  Tabs=() =>{
  return (
    <div className='tabs'>
      {/** Tab navigation  */}
      <TavNav/>
      {/** Tab inner content */}
      <Outlet/>

  </div>
  );
}

export default Tabs;
