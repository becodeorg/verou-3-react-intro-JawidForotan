import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/info">
          Info
        </Link>
      </nav>
    </div>
  );
};

export default Header;
