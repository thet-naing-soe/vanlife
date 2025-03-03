import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="host"
        >
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink className="login-link" to="login">
          <img
            src="../assets/images/avatar-icon.png"
            className="login-icon"
          />
        </NavLink>
      </nav>
    </header>
  );
}
