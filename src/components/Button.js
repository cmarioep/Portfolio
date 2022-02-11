import React from 'react';

// styles
import '../styles/components/_button.scss';

export default function Button(props) {
  return (
    <a className='button' href={props.link}> {props.label} </a>
  );
}
