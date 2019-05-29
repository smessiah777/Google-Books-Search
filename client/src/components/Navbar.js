import React from "react";

function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar myNav">
    //   <a className="navbar" href="/">
    //     <img className="nav-brand" src={require("../assets/images/logo.png")} />
    //   </a>
    //   <div className="collapse navbar-collapse" id="navbarText">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="navbar">
    //         <a className="nav-link" href="/">
    //           Search
    //         </a>
    //       </li>
    //       <li className="navbar">
    //         <a className="nav-link" href="/Saved">
    //           Saved
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

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
          <li class="nav-item">
            <a className="nav-link" href="/">
              Search
            </a>
          </li>
          <li class="nav-item">
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
