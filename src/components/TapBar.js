import { useState } from 'react';
import React, { useEffect } from 'react';

// icons
import AboutIcon from '../components/icons/AboutIcon';
import SkillsIcon from '../components/icons/SkillsIcon';
import ContactIcon from '../components/icons/ContactIcon';
import MyWorkIcon from '../components/icons/MyWorkIcon';

// style
import '../styles/components/_tapBar.scss';




export default function BottomNavBar() {

    const [isHide, setIsHide] = useState(false);

    let lastPageYOffset = 0;

    const onScrollHandler = () => {

        let currentPageYOffset = window.pageYOffset;

        if (currentPageYOffset > lastPageYOffset) {
            setIsHide(true);
        } else {
            setIsHide(false);
        }

        lastPageYOffset = currentPageYOffset <= 0 ? 0 : currentPageYOffset;

    }


    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);

        return () => {
            window.removeEventListener('scroll', onScrollHandler)
        }

    }, [])


    return (
        <nav className={`tapBar ${isHide && 'tapBar--hide'}`} >

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
