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
    description: 'CSS code generator that provides visual help to obtain the desired effects, works for box-shadow, text-shadow and Glass Morphism.',
    repository: 'https://github.com/cmarioep/CSS-Generator',
    link: 'https://box-shadow-generator-pi.vercel.app/',
  },
  {
    id: 'Project-2',
    title: 'Gif Browser',
    description: 'A simple Gif Browser that connects to Giphy API and brings a list of gifs searched by user.',
    repository: 'https://github.com/cmarioep/gif-browser',
    link: 'https://gif-browser-green.vercel.app/',
  },
  {
    id: 'Project-3',
    title: 'ROD Consulting',
    description: 'Landing page for electrical engineering consulting company, build with vanilla JavaScript, Bootstrap 5 and custom styles with Sass.',
    repository: 'https://github.com/cmarioep/ROD-Consulting',
    link: 'https://cmarioep.github.io/ROD-Consulting/',
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
