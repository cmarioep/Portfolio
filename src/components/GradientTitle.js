import React from 'react';
import { useEffect } from 'react';
import charAnimation from '../../node_modules/char-animation/dist/char-animation';

export default function GradientTitle(props) {

  useEffect(() => {
    charAnimation(
      {
        selector: ".gradient-title", 
        animation: "rubberBand",  
        color: "green", 
        stroke: "blue"
      }
    );
  });

  return (
    <h2 className='gradient-title'>{props.title}</h2>
    
  );

}
