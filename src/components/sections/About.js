import React from 'react';

import GradientTitle from "../GradientTitle";

// styles
import '../../styles/layout/_layout.scss';
import '../../styles/components/_description.scss';


export default function Section() {
  return (
    <section className='ly-viewport'>

        <GradientTitle title="About"/>

        <div className="description">
          <div className="description__text">
            <p>Hey there! My name is Carlos Mario.</p>
            <p>I'm a Web developer focused on make usable, accessible, inclusive, and human-centered digital experiences.</p>
            <p>I enjoy creating and designing things that live on the internet, fan of puzzles and design, lover of nature walks and animals.</p>
          </div>
                
          <div className="description__picture">
            <img src="./src/images/astronaut_head.png" alt="My Picture"/>
          </div>
        </div>

    </section>
  );
}
