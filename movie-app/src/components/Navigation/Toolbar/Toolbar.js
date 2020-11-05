import React from "react";

import Logo from "../../Logo/Logo";
import Title from "../../Title/Title";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => (
  <header className="sticky-top">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <Logo height= "3.5rem" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <NavigationItems />
        </ul>
       
      </div>
      <Title title = "Movies App" />
    </nav>
   
  </header>
);

export default toolbar;
