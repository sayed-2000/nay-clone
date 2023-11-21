import React from 'react'
import './Profile.scss'
import { Link } from 'react-router-dom'
import Right from '../rigthPane/Right'
import ProfileMid from './profile-mid/ProfileMid'

function Profile() {
  return (
    <div className='home'>
       
             <ProfileMid/>
             <Right/>
    </div>
  )
}

export default Profile
