import React from 'react';

// style
import '../../styles/components/_footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
        <p>Designed & Made with <span>{'\u2764'}</span> by Mario © 2022</p>
        <p>Built using React - Gatsby - Sass</p>
    </footer>
  );
}
