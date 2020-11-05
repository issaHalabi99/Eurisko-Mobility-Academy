import React from "react";

const Footer = (props) => (
  <React.Fragment>
    <footer class="page-footer font-small blue">
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="/"> {props.sentence}</a>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;
