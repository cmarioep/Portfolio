import React from 'react';
import { useEffect } from 'react';
import { projects } from '../data/templateData';

import GradientTitle from "../components/GradientTitle";
import BigCard from "../components/BigCard";
import SmallCard from "../components/SmallCard";

// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_cards.scss';


export default function Projects() {


  useEffect(() => {
    const oddItemsList = document.querySelectorAll(".bigCard:nth-child(odd)");
    const oddItemsArray = [...oddItemsList];

    oddItemsArray.map(item => item.classList.add("bigCards--alternatedFlow"));

  }, []);


  return (
    <section id="projects" className='ly-viewport ly-gap'>

      <GradientTitle title="Projects" />

      <div className="ly-blockFlow">

        {
          projects.map(project =>
            <BigCard
              key={project.id}
              {...project}
            />
          )
        }

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
