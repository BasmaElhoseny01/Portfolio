import React from 'react'

//styling
import '../Style/AboutMe.css'
import Basma from '../Images/Basma.jpeg'

import Avatar from './Avatar'




function AboutMe() {
  return (
    <div className="AboutContainer">
      <div className='Avatar'><Avatar Arr={["A", "b", "o", "u", "t", "M", "e"]} Max={7} /></div>
      <div className='AboutMe'>
        <div className="Info">
          <div>
            <h1 className='Name'>Basma Elhoseny</h1>
            <p className='Faculty'>Computer💻 Enginnering student🎓 @ <a href="https://eng.cu.edu.eg/en/">CUFE</a></p>
          </div>
          <h4 className='Location'>🏠 Cairo,Egypt</h4>
          <div>
            <h3 className='Acitvity'>Current Activities:</h3>
            <ul className='Acitvities'>
              <li>Improving my Web Devlopmets Skills</li>
              <li>Web Development and Design intern @ <a href="https://internship.thesparksfoundation.info/" target="_blank">Sparks Foundation</a></li>
              <li>Working on Building website for <a href="https://www.facebook.com/BetaAcademy.B" target="_blank">Beta Acandemy</a></li>
              <li>Doing Mini projects using Arduino</li>
            </ul>
          </div>
        </div>
        <div className='ImageContainer'><img className="Profile_Image" src={Basma} alt="Basma"></img></div>
      </div>
    </div>
  )
}

export default AboutMe