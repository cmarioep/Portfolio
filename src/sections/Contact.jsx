import React from 'react';

import {GradientTitle} from "../components/GradientTitle";
import {Button} from "../components/Button";

// styles
import '../styles/layout/_layout.scss';
import '../styles/components/_contact.scss';


export function Contact() {
  return (
    <section id="contact" className='ly-viewport'>

        <GradientTitle title="Ping me"/>

          <div className="contact">
              <div className="contact__text">
                  <p>Want to say "Hey!"? Got something you'd like to ask? New project or opportunity? Want to hire me?</p>
              </div>

              <Button link="mailto:cmescandonpardo@gmail.com" label="Ping me!" />

              <div className="contact__text">
                  <p>Prefer a face to face? <a href="https://calendly.com/cmarioep/30min" target="_blank" rel="noreferrer">Schedule a call</a></p>
              </div>


            </div>

    </section>
  );
}