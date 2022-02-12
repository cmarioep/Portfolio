import React from 'react';
import { useEffect } from 'react';

import GradientTitle from "../components/GradientTitle";
import TagCloud from 'TagCloud';
import {tags, options} from '../components/utils/TagCloudConfig';

// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_description.scss';


export default function Skills() {

  useEffect(() => {
    TagCloud('.description__tagCloud', tags, options);
  });


  return (
    <section className='ly-viewport'>

      <GradientTitle title="Skills" />

      <div className="description">

        <div className="description__text">

          <p>I'm Focused on creating solutions using a large spectrum of web technologies, mainly Javascript technologies.</p>

          <p>I love working with exceptional teams who have a passion for what they do. Always open to any new challenge or changing situation.</p>

          <ul>
            <li>Problem solver</li>
            <li>Self-taught</li>
            <li>Lifelong learner</li>
            <li>High attention to details</li>
            <li>Self-managment</li>
            <li>Friendly</li>
            <li>Easy to talk</li>
            <li>Empathic</li>
            <li>Common sense</li>
            <li>Enthusiastic & Optimistic</li>
          </ul>

        </div>

        <div className="description__tagCloud">

        </div>

      </div>

    </section>
  );
}
