import React from 'react';

// icons
import GitIcon from './icons/GitIcon';
import LinkToProject from './icons/LinkToProject';

// styles
import '../styles/components/_cards.scss';


export default function SmallCard({ title, description, skills, repository, link }) {
    return (

        <div className="smallCard">
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

            <a href={repository} target="_blank" className="smallCard__title">{title}</a>

            <p className="smallCard__details">{description}</p>

            <ul className="smallCard__skills">

                {
                    skills.map(skill =>
                        <li key={Math.random() * 10} >{skill}</li>

                    )
                }

            </ul>

        </div>

    );
}
