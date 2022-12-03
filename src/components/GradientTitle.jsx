import React from 'react';
import { useEffect } from 'react';

import charAnimation from 'char-animation';

// styles
import '../styles/components/_GradientTitle.scss';


export function GradientTitle(props) {

  useEffect(() => {
    charAnimation(
      {
        selector: ".gradient-title",
        animation: "rubberBand",
        color: "",
        stroke: "#66ffdb"
      }
    );
  }, []);

  return (
    <h2 className='gradient-title'>{props.title}</h2>
  );

}
