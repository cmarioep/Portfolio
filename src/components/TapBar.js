import React from 'react';

// icons
import AboutIcon from '../components/icons/AboutIcon';
import SkillsIcon from '../components/icons/SkillsIcon';
import ContactIcon from '../components/icons/ContactIcon';
import MyWorkIcon from '../components/icons/MyWorkIcon';

// style
import '../styles/components/_tapBar.scss';



export default function BottomNavBar() {
    return (
        <nav className="tapBar">

            <ul className="taps">

                <li className='tap'>
                    <a className="tap__links" href="www.google.com" >
                        <AboutIcon />
                    </a>
                </li>

                <li className='tap'>
                    <a className="tap__links" href="www.google.com" >
                        <SkillsIcon />
                    </a>
                </li>


                <li className='tap'>
                    <a className="tap__links" href="www.google.com" >
                        <MyWorkIcon />
                    </a>
                </li>


                <li className='tap'>
                    <a className="tap__links" href="www.google.com" >
                        <ContactIcon />
                    </a>
                </li>

            </ul>
            
        </nav>
    );
}
