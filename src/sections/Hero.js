import React from 'react';
import { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import ScrollDownIndicator from '../components/ScrollDownIndicator';

// Rellax is vanilla javascript parallax library.
import Rellax from 'rellax';

// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_hero.scss';


export default function Hero() {

    useEffect(() => {
        // Accepts any className
        new Rellax('.rellax');
    });


    return (
        <section className="ly-viewport ly-contentStart ly-gap">

            <figure className="astronaut rellax" data-rellax-speed="-4">
                <StaticImage className="astronaut__image" src="../images/astronaut.png" alt="" />
            </figure>

            <figure className="montains rellax" data-rellax-speed="0">
                <StaticImage className="montains__image" src="../images/rock_mountains.png" alt="" />
            </figure>

            <div className="ly-blockFlow">
                <div className="hero rellax" data-rellax-speed="8">
                    <h1 className="hero__title">Hi,<br />I'm Mario.</h1>
                    <h2 className="hero__subTitle">I love building things for the web</h2>
                    {/* TODO: Animation title
                    exceptional digital experiences
                    usable and accessible products */}

                </div>
            </div>
                    <ScrollDownIndicator/>
            

        </section>
    );
}
