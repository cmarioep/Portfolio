import React from 'react';
import { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import charAnimation from '../../node_modules/char-animation/dist/char-animation';

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
        charAnimation(
            {
                selector: ".animated-title", 
                animation: "rubberBand"      
            }
        );
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
                    <span className="hero__title animated-title">Hi,</span>
                    <h1 className="hero__title animated-title">I'm Mario.</h1>
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
