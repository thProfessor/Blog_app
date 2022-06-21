import React from "react";
import { icons } from "../styles/global";
import { Link } from "react-router-dom";
import { icon, links, logo, navbar, signs } from "../styles/homeStyles";
function Navbar() {
  return (
    <nav style={navbar}>
      <div style={logo}>
        <h1>D</h1>
      </div>

      <div style={links}>
        <Link to="/">
          <span className="link">Home</span>
        </Link>
        <Link to="/create">
          <span className="link">Create a Blog</span>
        </Link>
      </div>

      <div style={signs}>
        <span style={icon}>{icons.twitter}</span>
        <span style={icon}>{icons.insta}</span>
        <span style={icon}>{icons.blogIcon}</span>
      </div>
    </nav>
  );
}

export default Navbar;
