import React from 'react';
import { useOnScrollHandler } from '../hooks/useOnScrollHandler';

// styles
import '../styles/components/_scrollDonwIndicator.scss'


export default function ScrollDownIndicator() {

  const { hideScrollIndicator } = useOnScrollHandler();


  return (
    <div className={`scroll-down-indicator ${hideScrollIndicator && 'scroll-down-indicator--hide'}`}>
      <div className="scroll-down-indicator__arrow">

        <span></span>
        <span></span>
        <span></span>
      </div>
      <span className="scroll-down-indicator__text">Scroll Down</span>
    </div>
  );
}
