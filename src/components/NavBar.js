import React from 'react';

// icons
// import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

// style
import '../styles/components/_navBar.scss';


export default function NavBar() {
    return (
        <nav className="navBar">

            <input className="navBar__button" id="menu__button" type="checkbox"/>

            <label className="navBar__icon" htmlFor="menu__button">
                <CloseIcon />
            </label>
            

            <div className='navBar__filter'/>
            
                
            <ul className="navBar__menu">
                <li><a href="www.google.com" className="navBar__menu__link" data-text="About">About</a></li>
                <li><a href="www.google.com" className="navBar__menu__link" data-text="Skills">Skills</a></li>
                <li><a href="www.google.com" className="navBar__menu__link" data-text="Projects">Projects</a></li>
                <li><a href="www.google.com" className="navBar__menu__link" data-text="Contact">Contact</a></li>
            </ul>

        </nav>
    );
}
