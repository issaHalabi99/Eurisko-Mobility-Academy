import React from "react";
import Footer from "../../components/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import MainComponent from "../../containers/MainComponent/MainComponent";

function Layout() {
  return (
    <React.Fragment>
        <Toolbar />
        <div className="container-fluid">
        <MainComponent />
        </div>
        <Footer sentence="@IssaHalabi" />
    </React.Fragment>
  );
}

export default Layout;
