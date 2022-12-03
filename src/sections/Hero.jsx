import React from 'react';
import { useEffect } from 'react';
// import { StaticImage } from "gatsby-plugin-image";
import charAnimation from 'char-animation';

import {ScrollDownIndicator} from '../components/ScrollDownIndicator';

// Rellax is vanilla javascript parallax library.
import Rellax from 'rellax';

import astronaut from '../images/astronaut.png';
import montains from '../images/rock_mountains.png';

// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_hero.scss';


export function Hero() {

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
                <img className="astronaut__image" src={astronaut} alt="" />
            </figure>

            <figure className="montains rellax" data-rellax-speed="0">
                <img className="montains__image" src={montains} alt="" />
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
