import React from "react";
import classes from "./Title.module.css";
import PropTypes from "prop-types";


const Title = (props) => (
  <React.Fragment>
      <span className={classes.title}>{props.title}</span>
  </React.Fragment>
);

Title.propTypes = {
  title: PropTypes.string
};


export default Title;
