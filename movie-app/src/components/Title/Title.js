import React from "react";
import classes from './Title.module.css';

const Title = (props) => (
  <React.Fragment>
      <span className={classes.span}>{props.title}</span>
  </React.Fragment>
);

export default Title;
