import React from 'react';
import { useOnScrollHandler } from '../hooks/useOnScrollHandler';

// icons
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

// style
import '../styles/components/_navBar.scss';


export function NavBar() {

    const {navBarVisible} = useOnScrollHandler();

    return (
        <nav className={`navBar ${navBarVisible && 'navBar--show'}`}>

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
