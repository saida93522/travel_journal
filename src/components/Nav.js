import React from "react";
import nav_logo from "../nav_logo.svg";
const Nav = () => {
  return (
    <nav>
      <img src={nav_logo} alt="red marker" />
      <span className="nav-title">my travel journal.</span>
    </nav>
  );
};

export default Nav;
