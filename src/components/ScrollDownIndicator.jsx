import React from 'react';

// styles
import '../styles/components/_scrollDonwIndicator.scss'


export default function ScrollDownIndicator() {
  return (
    <div className='scroll-down-indicator'>
        <div className="scroll-down-indicator__arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="scroll-down-indicator__text">Scroll Down</span>
    </div>
  );
}
