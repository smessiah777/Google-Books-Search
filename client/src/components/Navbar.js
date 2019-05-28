import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <a className="navbar" href="/">
        Google Books
      </a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="navbar">
            <a className="nav-link" href="/">
              Search
            </a>
          </li>
          <li className="navbar">
            <a className="nav-link" href="/Saved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
