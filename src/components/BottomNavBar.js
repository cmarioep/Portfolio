import React from 'react';

// style
import '../styles/components/_bottomNavBar.scss';


export default function BottomNavBar() {
    return (
        <ul className="tapBar">
            <li><a href="www.google.com" className="navBar__menu__link" >About</a></li>
            <li><a href="www.google.com" className="navBar__menu__link" >Skills</a></li>
            <li><a href="www.google.com" className="navBar__menu__link" >Projects</a></li>
            <li><a href="www.google.com" className="navBar__menu__link" >Contact</a></li>
        </ul>
    );
}
