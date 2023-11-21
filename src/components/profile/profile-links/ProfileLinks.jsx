import React from 'react'
import './profileLinks.scss'
import { Link, Outlet } from 'react-router-dom'

function ProfileLinks() {
  return (
    <div className='profile-links'>
        <Link to='/profile'>
        <div className="box">
            <span className='active'>Posts</span>
        </div>
        </Link>
        <Link to='replies'>
        <div className="box">
            <span>Replies</span>
        </div>
        </Link>
        <Link to='highlights'>
        <div className="box">
            <span>Highlights</span>
        </div>
        </Link>
        <Link to="media">
        <div className="box">
            <span>Media</span>
        </div>
        </Link>
        <Link to='likes'>
        <div className="box">
            <span>Likes</span>
        </div>
        </Link>
     
    </div>
  )
}

export default ProfileLinks
