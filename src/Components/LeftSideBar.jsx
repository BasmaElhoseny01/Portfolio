import React from 'react'

//styling
import '../Style/LeftSideBar.css'

//Data
import SocialMedia_Data from '../Data/SocialMedia'

function LeftSideBar() {
  return (
    <div className='LeftSideBar'>
        {SocialMedia_Data.map((icon)=>{
            return <a href={icon.URL} target="_blank"><img className="MediaIcon" src={icon.Logo} alt={icon.alt} key={icon.alt}/></a>

        })}
        <div className="LLine"></div>
    </div>
  )
}

export default LeftSideBar