import React from "react";
import Categories from "./Categories/Categories";

const Films = (props) => (
  <React.Fragment>
    <div id="action">
      <Categories films={props.actions} click={props.click} />
    </div>
    <div id="comedy">
      <Categories films={props.comedy} click={props.click} />
    </div>
    <div id="crime">
      <Categories films={props.crime} click={props.click} />
    </div>
  </React.Fragment>
);

export default Films;
