import React from "react";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="app">
 
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <span className="navbar-brand " >
        N.Subhana
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" justify-content-end collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav  ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link link"  href="#Home" >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link"  href="#About">
                  About
                </a>
              </li>
              <li className="nav-item ">
              <a className="nav-link link" href="#Skill" >
                Skill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#Contact">
                Contact
              </a>
            </li>

             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
