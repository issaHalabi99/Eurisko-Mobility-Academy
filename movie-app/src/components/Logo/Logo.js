import React from "react";

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

export default Logo;
