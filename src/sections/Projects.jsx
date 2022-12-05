import React from 'react';
import { useEffect } from 'react';

import { projects, otherProjects } from '../data/templateData';

import { GradientTitle, BigCard, SmallCard } from "../components/";

// styles
import '../styles/layout/_layout.scss';


export function Projects() {


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

        {
          otherProjects.map(otherProject =>
            <SmallCard
              key={Math.random() * 10}
              {...otherProject}
            />
          )
        }

      </div>

    </section>
  );
}
