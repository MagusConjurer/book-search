import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

class Nav extends React.Component {

  componentDidMount() {
    // Activate the dropdown menu for when the menu shows on smaller screens
    var dropdowns = document.querySelectorAll('.dropdown-trigger')
    for (var i = 0; i < dropdowns.length; i++){
      M.Dropdown.init(dropdowns[i]);
    } 
  }

  render() {
    return (
      <nav className="grey darken-3">
        <div className="nav-wrapper">
          <a href="https://magusconjurer.github.io/portfolio.html" className="brand-logo">Portfolio</a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger dropdown-trigger right"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Search</a></li>
            <li><a href="/saved">Saved</a></li>
          </ul>
          <ul className="dropdown-content" id="mobile-demo">
            <li><a href="/">Search</a></li>
            <li><a href="/saved">Saved</a></li>
          </ul>
        </div>
      </nav>
  )};
};

export default Nav;