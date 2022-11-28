import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// icons
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

// style
import '../styles/components/_navBar.scss';


export default function NavBar() {

    const [opacity, setOpacity] = useState(false);


    const onScrollDownHandler = () => {

        if (window.scrollY > 50) {
            setOpacity(true);
        } else {
            setOpacity(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', onScrollDownHandler);

        return () => {
            window.removeEventListener('scroll', onScrollDownHandler);
        }

    }, [])


    return (
        <nav className={`navBar ${opacity && 'navBar--opacity'}`}>

            <input className="navBar__button" id="menu__button" type="checkbox" />

            <label className="navBar__icon" htmlFor="menu__button">
                <MenuIcon className="navBar__icon--menu" />
                <CloseIcon className="navBar__icon--close" />
            </label>


            <div className='navBar__filter' />


            <ul className="navBar__menu">
                <li><a href="#about" className="navBar__menu__link" data-text="About">About</a></li>
                <li><a href="#skills" className="navBar__menu__link" data-text="Skills">Skills</a></li>
                <li><a href="#projects" className="navBar__menu__link" data-text="Projects">Projects</a></li>
                <li><a href="#contact" className="navBar__menu__link" data-text="Contact">Contact</a></li>
            </ul>

        </nav>
    );
}
