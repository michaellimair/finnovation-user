/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import AppHeader from '../../components/Header';
import CustomDrawer from '../../components/Drawer';

const HomePage = (props) => {
  const [drawerOpened, toggleDrawer] = useState(false);

  return (
    <div>
      Home Page
    </div>
  );
}

export default HomePage;
