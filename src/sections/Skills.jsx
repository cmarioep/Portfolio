import React from 'react';
import { useEffect } from 'react';

import { skills } from '../data/templateData';

import {GradientTitle} from "../components/GradientTitle";

import TagCloud from 'TagCloud';
import { tags, options } from '../components/utils/TagCloudConfig';

// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_description.scss';


export function Skills() {

  useEffect(() => {
    TagCloud('.description__tagCloud', tags, options);
  }, []);


  return (
    <section id="skills" className='ly-viewport ly-gap'>

      <GradientTitle title="Skills" />

      <div className="description">

        <div className="description__text">

          <p>{skills.description}</p>


          <ul>
            {
              skills.skills.map(skill =>
                <li key={Math.random() * 20} >{skill}</li>
              )
            }
          </ul>

        </div>

        <div className="description__tagCloud">

        </div>

      </div>

    </section>
  );
}
