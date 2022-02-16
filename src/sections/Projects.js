import React from 'react';

import GradientTitle from "../components/GradientTitle";
import BigCard from "../components/BigCard";
import SmallCard from "../components/SmallCard";

// styles
import '../styles/layout/_layout.scss';


const projects = [
  {
    title : "Titulo 1",
    description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique mollitia consequatur nam quidem necessitatibus dolorem illo, assumenda eligendi ipsam pariatur at beatae debitis soluta a sit totam quod consectetur accusantium maxime? Harum natus perferendis adipisci."
  }
]


export default function Projects(props) {
  return (
    <section className='ly-viewport'>

        <GradientTitle title="Projects"/>

        <div className="ly-blockFlow">
          <BigCard
            title={projects[0].title}
            description={projects[0].description}
          />

          <BigCard
            align = "--mirror"
            title={projects[0].title}
            description={projects[0].description}
          />
        </div>

        {/* sytle for h2 are defined on styles/base/_base.scss */}
        <h2>Other Noteworthy Projects</h2>
  
        <div className="ly-inlineFlow">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>

    </section>
  );
}
