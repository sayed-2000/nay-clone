import React from 'react'
import './profileMid.scss'
import TopNav from '../../../components/theMid/topNav/TopNav'
import Personal from '../../../components/theMid/Personal/Personal'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import image from '../../../images/unnamed.jpg'
import ProfileLinks from '../../../components/profile/profile-links/ProfileLinks'
import Test from '../../../components/Test'
import WhoFollow from '../../../components/profile/Who-to-follow/WhoFollow'
import Replies from '../../../components/profile/replies/Replies'
import Highlights from '../../../components/profile/highlights/Highlights'

function ProfileMid() {
  return (
    <div className='mid-profile'>
          <div className="profile__top">
            <span className="icon">
              <Link to="/">
                <svg width='30px' height='30px' fill='#fff'>
                  <g>
                  <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
                  </g>
                </svg>
              </Link>
            </span>
            <div className="profile__data">
              <h3>sayed aymen</h3>
              <p>0 posts</p>
            </div>
          </div>
          <div className="profile-edit">
            <div className="main-image">
              <img src={image} alt="" />
            </div>
            <div className="Edit-photo">
              <div className="photo">
                <img src={image} alt="" />
              </div>
              <div className="edit">Edit profile</div>
            </div>
          </div>
          <div className="profile-name">
              <h3>sayed aymen</h3>
              <p>@saye7865</p>
          </div>
          <div className="Joined">
            <span className='icon'>
              <svg  width="30px" height="30px" fill='#71767b' viewBox='0 0 30 30'>
                <g>
                <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                </g>
              </svg>
            </span>
            <p>Joined November 2023</p>
          </div>
          <div className="Follow">
              <a href="#"> <span>3</span> Following</a>
              <a href="#"> <span>0</span> Followers</a>
          </div>
          <ProfileLinks/>
          <Outlet/>
            
    </div>
  )
}

export default ProfileMid
