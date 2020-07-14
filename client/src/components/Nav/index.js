import React from 'react';

function Nav() {
  return (
    <nav className="grey darken-3">
      <div className="nav-wrapper">
        <a href="https://magusconjurer.github.io/portfolio.html" className="brand-logo">Portfolio</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Search</a></li>
          <li><a href="/saved">Saved</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;