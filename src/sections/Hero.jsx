import React from 'react';
import { useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

import { about } from '../data/templateData';

import Rellax from 'rellax';   // Rellax is vanilla javascript parallax library.
import charAnimation from 'char-animation';

import { ScrollDownIndicator } from '../components/ScrollDownIndicator';


// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_hero.scss';


export function Hero() {

    useEffect(() => {

        new Rellax('.rellax');

        charAnimation(
            {
                selector: ".animated-title",
                animation: "rubberBand"
            }
        );
    }, []);


    return (
        <section className="ly-viewport ly-contentStart ly-gap">

            <figure className="astronaut rellax" data-rellax-speed="-4">
                <StaticImage className="astronaut__image" src="../images/astronaut.png" alt="Astronaut at Moon background image" />
            </figure>

            <figure className="montains rellax" data-rellax-speed="0">
                <StaticImage className="montains__image" src="../images/rock_mountains.png" alt="Rock mountains background image" />
            </figure>

            <div className="ly-blockFlow">
                <div className="hero rellax" data-rellax-speed="8">
                    <span className="hero__title animated-title">Hi,</span>
                    <h1 className="hero__title animated-title">{about.name}</h1>
                    <h2 className="hero__subTitle">{about.heroDescription}</h2>

                </div>
            </div>
            <ScrollDownIndicator />


        </section>
    );
}
