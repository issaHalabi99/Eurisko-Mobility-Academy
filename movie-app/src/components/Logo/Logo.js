import React from "react";
import PropTypes from "prop-types";


import movieLogo from "../../assets/images/deadpool.png";

const Logo = (props) => (
  <React.Fragment>
    <img
      src={movieLogo}
      style={{ height: props.height }}
      alt="MyFilms"
      loading="lazy"
    />
  </React.Fragment>
);

Logo.propTypes = {
  height: PropTypes.string
};


export default Logo;
