import React from 'react';
import './themid.scss'
import TopNav from './topNav/TopNav';
import Personal from './Personal/Personal';
import Postes from './postes/Postes';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';





function Mid() {
  return (

    <div className='mid'>
       <TopNav/>
       <Personal/>
        {/* <Postes/> */}
        <Outlet/>
    </div>

  )
}

export default Mid
