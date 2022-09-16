import React from 'react'

//styling
import '../Style/Achievments.css'

//Data
import Achievments_Data from '../Data/Achievments.js'

import Avatar from './Avatar'

function Achievments() {
    return (
        <div className='AchievmentsConatiner'>
            <div className='Avatar'> <Avatar Arr={["A","c","h","i","e","v","m","e","n","t","s"]} Max={11}/></div>
            <ul className='Achievments'>
                {Achievments_Data.map((item) => {
                    return (
                        <li className='Sticky_Note' key={item.Title}>
                            <a href={item.Link} target="_blank">
                                <div className='Content'>
                                    <h2>{item.Title}</h2>
                                    <p>{item.Paragraph}</p>
                                    <div className='Footer'>
                                        <h3>{item.Date}</h3>
                                        <div className="Sponsors">
                                            {item.Logos.map((logo) => {
                                                return (<img src={logo.img} alt={logo.alt} key={logo.img}></img>)
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    )

                })}
            </ul>

        </div>
    )
}
export default Achievments