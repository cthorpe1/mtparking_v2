import React from 'react';
import SiteHeader from './SiteHeader/SiteHeader';
import Banner from './Banner/Banner';

import classes from "./Header.module.css";

const Header = () => (
    <div className={classes.Header}>
      <SiteHeader />
      <Banner />
    </div>
);

export default Header;