import React from "react";

export default function Cards(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.detail}</p>
        <button
          className="btn btn-primary"
          style={{ color: "black", backgroundColor: "grey", border: "none" }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
