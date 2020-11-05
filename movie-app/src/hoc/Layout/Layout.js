import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import MainComponent from '../../containers/MainComponent/MainComponent';

function Layout() {
  return (
    <React.Fragment>
         <Toolbar />
         <MainComponent />
    </React.Fragment>
  );
}

export default Layout;
