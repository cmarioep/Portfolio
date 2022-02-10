import React from 'react';

import GradientTitle from "../GradientTitle";

// styles
import '../../styles/layout/_layout.scss';
import '../../styles/components/_contact.scss';


export default function Section() {
  return (
    <section className='ly-viewport'>

        <GradientTitle title="Ping me"/>

          <div className="contact">
              <div className="contact__text">
                  <p>Want to say "Hey!"? Got something you'd like to ask? New project or opportunity? Want to hire me?</p>
              </div>

              <a className="button" href="mailto:cmescandonpardo@gmail.com">Ping me!</a>

              <div className="contact__text">
                  <p>Prefer a face to face? <a href="https://calendly.com/cmarioep/30min" target="_blank">Schedule a call</a></p>
              </div>


            </div>

    </section>
  );
}