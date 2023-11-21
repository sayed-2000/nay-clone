import React from 'react'
import './home.scss'
import Mid from '../../components/theMid/Mid'
import Right from '../rigthPane/Right'

function Home() {
  return (
    <div className='home'>
      <Mid/>
      <Right/>
    </div>
  )
}

export default Home
