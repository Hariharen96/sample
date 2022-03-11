import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        CrudApi
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" class="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/users/add" className="btn btn-primary">
        Add user
      </Link>
    </nav>
  );
};

export default Navbar;
