import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <React.Fragment>
        <NavigationItem link="#action">Action</NavigationItem>
        <NavigationItem link="#comedy">Comedy</NavigationItem>
        <NavigationItem link="#crime">Crime</NavigationItem>
    </React.Fragment>
);

export default navigationItems;