import React from 'react';

// icons
import { GitIcon, CodePenIcon, NotionIcon, LinkedInIcon } from './icons/';

// style
import '../styles/components/_socialNetworks.scss';


export function SocialNetworks() {
  return (
    <aside className="socialNetworks">
      <ul className="socialNetworks__list">

        <li className="socialNetworks__item">
          <a className="socialNetworks__link" href="https://github.com/cmarioep" target="_blank" rel="noreferrer">
            <GitIcon />
          </a>
        </li>

        <li className="socialNetworks__item">
          <a className="socialNetworks__link" href="https://codepen.io/cmarioep" target="_blank" rel="noreferrer">
            <CodePenIcon />
          </a>
        </li>

        <li className="socialNetworks__item">
          <a className="socialNetworks__link" href="https://www.notion.so/Carlos-Mario-cb599741340248e2b26d8e6b812935d1" target="_blank" rel="noreferrer">
            <NotionIcon />
          </a>
        </li>

        <li className="socialNetworks__item">
          <a className="socialNetworks__link" href="https://www.linkedin.com/in/cmarioep/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </li>

      </ul>
    </aside>
  );
}
