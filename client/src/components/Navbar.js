import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/">
        <img className="nav-brand" src={require("../assets/images/logo.png")} />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <a className="nav-link nav-link-search" href="/">
              Search
            </a>
          </li>
          <li class="nav-item ">
            <a className="nav-link nav-link-saved" href="/Saved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
