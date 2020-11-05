import React from "react";
import PropTypes from "prop-types";


const navigationItem = (props) => (
  <li className="nav-item active">
    <a className="nav-link" href={props.link}>
      {props.children} <span className="sr-only">( {props.children})</span>
    </a>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string
};


export default navigationItem;
