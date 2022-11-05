import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ title, pages }) {
  return (
    <nav>
      <div>
        <h2>
          <Link to="/">
            <span className="show-large">{title}</span>
            <span className="show-small">LES</span>
          </Link>
        </h2>
      </div>
      <div>
        {pages.map((page, i) => (
          <Link to={page === "home" ? "/" : "/" + page} key={i}>
            <img
              height="25"
              src={require(`../../images/logos/${page}.png`)}
              alt=""
            />{" "}
            <span className="nav-text">
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
