import React from 'react';
import { useEffect } from 'react';

import GradientTitle from "../components/GradientTitle";
import BigCard from "../components/BigCard";
import SmallCard from "../components/SmallCard";

// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_cards.scss';


const projects = [
  {
    id: 'Project-1',
    title: 'CSS Code Generator',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique mollitia consequatur nam quidem necessitatibus dolorem illo, assumenda eligendi ipsam pariatur at beatae debitis soluta a sit totam quod consectetur accusantium maxime? Harum natus perferendis adipisci.',
    repository: 'https://github.com/cmarioep/CSS-Generator',
    link: 'https://box-shadow-generator-pi.vercel.app/',
  },
  {
    id: 'Project-2',
    title: 'Gif Browser',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique mollitia consequatur nam quidem necessitatibus dolorem illo, assumenda eligendi ipsam pariatur at beatae debitis soluta a sit totam quod consectetur accusantium maxime? Harum natus perferendis adipisci.',
    repository: 'https://github.com/cmarioep/CSS-Generator',
    link: 'https://box-shadow-generator-pi.vercel.app/',
  },
  {
    id: 'Project-3',
    title: 'ROD Consulting',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique mollitia consequatur nam quidem necessitatibus dolorem illo, assumenda eligendi ipsam pariatur at beatae debitis soluta a sit totam quod consectetur accusantium maxime? Harum natus perferendis adipisci.',
    repository: 'https://github.com/cmarioep/CSS-Generator',
    link: 'https://box-shadow-generator-pi.vercel.app/',
  }
]


export default function Projects() {


  useEffect(() => {
    const oddItemsList = document.querySelectorAll(".bigCard:nth-child(odd)");
    const oddItemsArray = [...oddItemsList];

    oddItemsArray.map(item => item.classList.add("bigCards--alternatedFlow"));
    
  });


  return (
    <section id="projects" className='ly-viewport ly-gap'>

      <GradientTitle title="Projects" />

      <div className="ly-blockFlow">
        <BigCard
          id={projects[0].id}
          title={projects[0].title}
          screenshot={projects[0].screenshot}
          description={projects[0].description}
          repository = {projects[0].repository}
          link = {projects[0].link}
        />

        <BigCard
          id={projects[1].id}
          title={projects[1].title}
          screenshot={projects[1].screenshot}
          description={projects[1].description}
          repository = {projects[1].repository}
          link = {projects[1].link}
        />
 
        <BigCard
          id={projects[2].id}
          title={projects[2].title}
          screenshot={projects[2].screenshot}
          description={projects[2].description}
          repository = {projects[2].repository}
          link = {projects[2].link}
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
