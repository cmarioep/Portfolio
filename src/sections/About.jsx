import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import { about } from '../data/templateData';

import { GradientTitle } from "../components/GradientTitle";

// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_description.scss';


export function About() {
  return (
    <section id="about" className='ly-viewport ly-gap'>

      <GradientTitle title="About" />

      <div className="description">
        <div className="description__text">
          <p>{`Hey there! My name is ${about.name}.`}</p>
          <p>{about.description}</p>
          <p>{about.additionalDescription}</p>
        </div>

        <div className="description__picture">
          <StaticImage src="../images/avatar.png" alt="My Picture" />
        </div>
      </div>

    </section>
  );
}
