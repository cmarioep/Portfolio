import React from 'react';

// icons
import { GitIcon, LinkToProject } from './icons/';

// styles
import '../styles/components/_SmallCard.scss';


export function SmallCard({ title, description, skills, repository, link }) {
    return (

        <div className="smallCard">

            <h3><a href={link} target="_blank" rel="noreferrer" className="smallCard__title">{title}</a></h3>

            <p className="smallCard__details">{description}</p>

            <ul className="smallCard__skills">

                {
                    skills.map(skill =>
                        <li key={Math.random() * 10} >{skill}</li>

                    )
                }

            </ul>

            <ul className="smallCard__links">
                <li>
                    <a className="smallCard__links__repository" href={repository} target="_blank" rel="noreferrer">
                        <GitIcon />
                    </a>
                </li>

                <li>
                    <a className="smallCard__links__repository" href={link} target="_blank" rel="noreferrer">
                        <LinkToProject />
                    </a>
                </li>
            </ul>

        </div>

    );
}
