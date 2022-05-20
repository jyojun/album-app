import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

function Navbar() {
  const Auth = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <i></i>
        <Link to="/">Photo Album</Link>
      </div>

      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        {Auth.isAuthenticated ? (
          <li
            onClick={() => {
              localStorage.removeItem("auth-token");
              Auth.logout();
            }}
          >
            Logout
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
