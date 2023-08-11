import React from "react";
import Hero from "../Images/hero.webp";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Welcome to <br /> <span>The Wishing Well!</span>
          </h1>
          <p className="lead">
            Welcome to "The Wishing Well" – a haven for all your sweet dreams
            and confectionery desires. Indulge in a world of delectable
            delights, where every cake is a masterpiece and every bite a wish
            come true. From classic elegance to whimsical creations, "The
            Wishing Well" offers an enchanting array of cakes that transform any
            occasion into a magical celebration.
          </p>
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
            <Link to="/about" style={{ color: "black" }}>
              About Us
            </Link>
          </button>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img src={Hero} className="rounded-lg-3" alt="" width="720" />
        </div>
      </div>
    </div>
  );
}
