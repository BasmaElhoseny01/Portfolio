import React from 'react'

//styling
import '../Style/NavBar.css'
//Script
// import '../Scripts/NavBar.js' 

import Avatar from './Avatar';

function NavBar() {

    const ToggleButton = document.getElementsByClassName("Toggle-Button")[0];
    console.log({ ToggleButton })
    // const popDownList = document.getElementsByClassName("NavItems")[0];

    // ToggleButton.addEventListener('click', () => {
    //     // popDownList.classList.toggle('active')
    //     console.log("clicked")
    // })

    return (
        <div className='NavBar'>
            <Avatar Arr={["B", "a", "s", "m", "a"]} Max={5} />
            <ul className='NavItems'>
                <li><a href='#'>About Me</a></li>
                <li><a href='#Achievements'>Achievements</a></li>
                <li><a href='#Skills'>Skills</a></li>
                <li><a href='#Projects'>Projects</a></li>
            </ul>
        </div>
    )
}

export default NavBar