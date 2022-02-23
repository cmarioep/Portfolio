import React from 'react';
import { StaticImage } from "gatsby-plugin-image";


// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_hero.scss';


export default function Hero() {
    return (
        <section className="ly-viewport">

            <figure className="astronaut rellax" data-rellax-speed="-4">
                <StaticImage className="astronaut__image" src="../images/mission_hero-2.png" alt="" />
            </figure>

            <figure className="montains rellax" data-rellax-speed="0">
                <StaticImage className="montains__image" src="../images/picker-2-100-2.png" alt="" />
            </figure>

            <div className="ly-blockFlow">
                <div className="hero rellax" data-rellax-speed="8">
                    <h1 className="hero__title">Hi,<br />I'm Mario.</h1>
                    <h2 className="hero__subTitle">I love building things for the web</h2>
                    TODO: Animation title
                    exceptional digital experiences
                    usable and accessible products
                    <a className="button" href="mailto:cmescandonpardo@gmail.com">Ping me!</a>
                </div>
            </div>

        </section>
    );
}
