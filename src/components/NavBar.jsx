import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <header className="header">
        <Link to={"/"} className="logo">
          DigitalTwin
        </Link>

        <div className="linkContainer">
          <Link to="/">Home</Link>
          <Link to="/concept">Concept</Link>
          <Link to="/consortium">Consortium</Link>
          <Link to="/news">News</Link>
          <Link to="/publications">Publications</Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;