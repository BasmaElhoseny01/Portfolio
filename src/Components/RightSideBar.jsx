import React from 'react'

//Data
import SocialMedia_Data from '../Data/SocialMedia'

//styling
import '../Style/RightSideBar.css'

function RightSideBar() {
  let Gmail = SocialMedia_Data[SocialMedia_Data.length - 1];
  return (
    <div className='RightSideBar'>
      <div className="RLine"></div>
      <div className="Gmail"><a href={Gmail.URL} target="_blank">{Gmail.Email}</a></div>
      <div className="RLine"></div>
    </div>
  )
}

export default RightSideBar