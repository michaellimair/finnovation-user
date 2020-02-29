/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import DashboardColumns from './components/DashboardColumns';
import './styles.css';

const HomePage = (props) => (
  <div>
    <DashboardColumns />
  </div>
)

export default HomePage;
