import React from 'react'
import './right.scss'


import RightSearch from '../../components/rigth/rigth-search/RightSearch';
import RightHappening from '../../components/rigth/rigth-happening/RightHappening';
import RightFollow from '../../components/rigth/right-follow/RightFollow';

function Right() {
  return (
    <div className='right'>
         <RightSearch/>
        <RightHappening/>
        <RightFollow/>

    </div>
  )
}

export default Right
