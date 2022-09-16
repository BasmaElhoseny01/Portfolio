import React from 'react'

//styling
import '../Style/Skills.css'

//Data
import Skills_Data from '../Data/Skills.js'

import Avatar from './Avatar'

function Skills() {
  return (
    <div className="Skills">
      <div className='Avatar'><Avatar Arr={["S","k","i","l","l","s"]} Max={6}/></div>
      <div className="row">
        {Skills_Data.map((item) => {
          return (
            <div className="column" key={item.alt}>
              <div className="ItemCard">
                <figure className="ItemCard__thumb">
                  <img src={item.Logo} alt={item.alt} />
                  <span className="shadow cover"><img src={item.Logo} alt={item.alt} /></span>
                </figure>
              </div>
            </div>
          );
        })}
      </div>
      </div>
  )
}

export default Skills