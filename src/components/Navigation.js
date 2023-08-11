import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav className="py-2 bg-body-tertiary border-bottom ">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "black" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "black" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" style={{ color: "black" }}>
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
