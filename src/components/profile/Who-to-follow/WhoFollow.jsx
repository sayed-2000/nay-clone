import React from 'react'
import './whoFollow.scss'
import DocumentationIcon from '../../../asiste/documentationIcon/DocumentationIcon'
import Data from '../../../data/DataPeopleWhoFollow.json'

function WhoFollow() {

  return (
    <>
 
    <div className='who-follow'>
        <h1>who to follow </h1>
        
             {
              Data.map((itme) => (
                        
              <div className="People" key={itme.id}>
              <div className="box-people">
                <div className="data">
                  <div className="image">
                    <img src={itme.iamge} alt="" />
                  </div>
                  <div className="name">
                    <h3>  {itme.name}     <span> <DocumentationIcon/></span>  </h3>
                    <p>{itme.nameEmail}</p>
                  </div>
                </div>
                  <div className="input">Follow</div>
              </div>
                <div className="text">
                   <p>{itme.text} </p> 
                </div>

            </div>
              ))
            }
            <div className="see-more">
                <div className="box">
                  <a href="#"><p>Show more</p> </a> 
                </div>
           </div>
    </div>
    </>
  )
}

export default WhoFollow
