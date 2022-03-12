import React from 'react';

// icons
import GitIcon from './icons/GitIcon';
import LinkToProject from './icons/LinkToProject';

// styles
import '../styles/components/_cards.scss';


export default function SmallCard() {
  return (

    <div className="smallCard">
        <ul className="smallCard__links">
            <li>
                <a className="smallCard__links__repository"href="www.google.com" target="_blank" rel="noreferrer">
                    <GitIcon />
                </a>
            </li>

            <li>
                <a className="smallCard__links__repository"href="www.google.com" target="_blank" rel="noreferrer">
                    <LinkToProject />
                </a>
            </li>
        </ul>
        
        <a href="www.google.com" className="smallCard__title">char-animation</a>
        
        <p className="smallCard__details">Split strings text into single chars and applies animations to each one when the cursor passes over them.</p>
        
        <ul className="smallCard__skills">
            <li>ES6+</li>
            <li>Webpack</li>
            <li>Babel</li>
        </ul>

    </div>
    
  );
}
