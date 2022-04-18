import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

// icons
import GitIcon from './icons/GitIcon';
import LinkToProject from './icons/LinkToProject';

// styles
import '../styles/components/_cards.scss';


export default function BigCard(props) {

    return (

        <div className="bigCard">

            <div className="bigCard__content">

                <h3 className="bigCard__content__title">{props.title}</h3>

                <p className="bigCard__content__details">{props.description}</p>

                <ul className="bigCard__content__skills">
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    <li>Skill 4</li>
                    <li>Skill 5</li>
                </ul>

                <ul className="bigCard__content__links">
                    <li>
                        <a className="bigCard__content__links__repository" href="www.google.com" target="_blank" rel="noreferrer">
                            <GitIcon />
                        </a>
                    </li>

                    <li>
                        <a className="bigCard__content__links__repository" href="www.google.com" target="_blank" rel="noreferrer">
                            <LinkToProject />
                        </a>
                    </li>

                </ul>

            </div>

            <a className="bigCard__screenshot" href="www.google.com" target="_blank" rel="noreferrer">
                <StaticImage className="bigCard__screenshot__image" src="../images/temp_background.webp" alt="Preview screenshot project" />
            </a>


        </div>

    );
}
