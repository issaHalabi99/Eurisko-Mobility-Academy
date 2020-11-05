import React from "react";

const Footer = (props) => (
  <React.Fragment>
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="/"> {props.sentence}</a>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;
