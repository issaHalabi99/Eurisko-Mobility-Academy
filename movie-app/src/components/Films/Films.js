import React from "react";
import Categories from "./Categories/Categories";

const Films = (props) => (
  <React.Fragment>
      <Categories actions = {props.actions} click = {props.click} />
  </React.Fragment>
);

export default Films;
