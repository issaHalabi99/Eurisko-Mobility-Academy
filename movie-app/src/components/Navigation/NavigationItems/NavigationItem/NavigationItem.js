import React from "react";

const navigationItem = (props) => (
  <li className="nav-item active">
    <a className="nav-link" href={props.link}>
      {props.children} <span className="sr-only">( {props.children})</span>
    </a>
  </li>
);

export default navigationItem;
