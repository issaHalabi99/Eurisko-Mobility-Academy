import React from "react";
import Categories from "./Categories/Categories";
import PropTypes from "prop-types";
import classes from "./Films.module.css";

const Films = (props) => (
  <React.Fragment>
    <div className={classes.tete} id="action">
      <Categories films={props.actions} click={props.click} />
    </div>
    <div className={classes.tete} id="comedy">
      <Categories films={props.comedy} click={props.click} />
    </div>
    <div className={classes.tete} id="crime">
      <Categories films={props.crime} click={props.click} />
    </div>
  </React.Fragment>
);

Films.propTypes = {
  actions: PropTypes.object,
  comedy: PropTypes.object,
  crime: PropTypes.object,
  click: PropTypes.func,
};

export default Films;
