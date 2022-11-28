import React from 'react';
import { useOnScrollHandler } from '../hooks/useOnScrollHandler';

// icons
import AboutIcon from '../components/icons/AboutIcon';
import SkillsIcon from '../components/icons/SkillsIcon';
import ContactIcon from '../components/icons/ContactIcon';
import MyWorkIcon from '../components/icons/MyWorkIcon';

// style
import '../styles/components/_tapBar.scss';


export default function BottomNavBar() {

    const {isHide} = useOnScrollHandler();


    return (
        <nav className={`tapBar ${isHide && 'tapBar--show'}`} >

            <ul className="taps">

                <li className='tap'>
                    <a className="tap__links" href="#about" >
                        <AboutIcon />
                        <p className='tap__links__label'>About</p>
                    </a>
                </li>

                <li className='tap'>
                    <a className="tap__links" href="#skills" >
                        <SkillsIcon />
                        <p className='tap__links__label'>Skills</p>
                    </a>
                </li>


                <li className='tap'>
                    <a className="tap__links" href="#projects" >
                        <MyWorkIcon />
                        <p className='tap__links__label'>Projects</p>
                    </a>
                </li>


                <li className='tap'>
                    <a className="tap__links" href="#contact" >
                        <ContactIcon />
                        <p className='tap__links__label'>Contact</p>
                    </a>
                </li>

            </ul>

        </nav>
    );
}
