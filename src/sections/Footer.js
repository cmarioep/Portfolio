import React from 'react';

// style
import '../styles/components/_footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
              <p>Designed & Made with <span>{'\u2764'}</span> by <a href="https://github.com/cmarioep/Portfolio" target="_blank" rel="noreferrer">cmarioep</a> © 2022</p>
        <p>Built with Gatsby</p>
    </footer>
  );
}
