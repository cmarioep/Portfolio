import React from 'react';

// style
import '../styles/components/_tapBar.scss';


export default function BottomNavBar() {
    return (
        <nav className="tapBar">
            <ul className="taps">
                <li className='tap'><a className="navBar__menu__link" href="www.google.com" >1</a></li>
                <li className='tap'><a className="navBar__menu__link" href="www.google.com" >2</a></li>
                <li className='tap'><a className="navBar__menu__link" href="www.google.com" >3</a></li>
                <li className='tap'><a className="navBar__menu__link" href="www.google.com" >4</a></li>
            </ul>
        </nav>
    );
}
