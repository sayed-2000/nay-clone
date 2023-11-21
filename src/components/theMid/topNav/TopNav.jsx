import React from 'react'
import './topNav.scss'
import { BiCertification } from "react-icons/bi";
import settingImage from '../../../images/setting.png'
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className='TopNav'>
      <div className="links">
        <Link to='/'>
            <div className="forYou"><p>For you</p></div>
        </Link>
        <Link to='following'>
            <div className="following"><p>Following</p></div>
        </Link>
        <span className='icon'>
            <img src={settingImage} alt="" />
        </span>
      </div>
    </div>
  )
}

export default TopNav
