import React from 'react';

// icons
import { GitIcon, LinkToProject } from './icons/';

// styles
import '../styles/components/_cards.scss';
import { ProjectScreenshot } from './ProjectScreenshot';


export function BigCard({ id, title, description, skills, repository, link }) {


    return (

        <div className="bigCard">

            <div className="bigCard__content">

                <h3 className="bigCard__content__title"><a href={link} target="_blank" rel="noreferrer">{title}</a></h3>

                <p className="bigCard__content__details">{description}</p>

                <ul className="bigCard__content__skills">
                    {
                        skills.map(skill =>
                            <li key={Math.random() * 10} >{skill}</li>

                        )
                    }
                </ul>

                <ul className="bigCard__content__links">
                    <li>
                        <a className="bigCard__content__links__repository" href={repository} target="_blank" rel="noreferrer">
                            <GitIcon />
                        </a>
                    </li>

                    <li>
                        <a className="bigCard__content__links__repository" href={link} target="_blank" rel="noreferrer">
                            <LinkToProject />
                        </a>
                    </li>

                </ul>

            </div>

            <a className="bigCard__screenshot" href={link} target="_blank" rel="noreferrer">
                <ProjectScreenshot image={id} />
            </a>


        </div>

    );
}
