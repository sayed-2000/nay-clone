import React from 'react';
import './rigthHappening.scss'
import More from '../../../asiste/MoreIcon';
import data from '../../../data/DataFollow.json'

function RigthHappening() {
  return (
    <div className="right__happening">
          <h2>What’s happening</h2>
          {
            data.map((itme) => (
                        <a href="#" key={itme.id}>
            <div className="itme__happening">
              <div className="box">
              <div className="top__itme__happening">
                <p>{itme.Trending}</p>
                <More/>
              </div>
              <div className="title__happening">
                <h3>{itme['Trending-name']}</h3>
              </div>
              <div className="number__happening">
                <p>{itme['Trending-number']}</p>
              </div>
              </div>
            </div>
          </a>
            ))
          }

          <div className="see-more">
            <div className="box">
              <p>show more</p>
            </div>
          </div>
        </div>
  )
}

export default RigthHappening
