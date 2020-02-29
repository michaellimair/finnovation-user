import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';
import HomeTutorialVideo from '../HomeTutorialVideo';
import HomeEditor from '../HomeEditor';
import HomeNews from '../HomeNews';

const DashboardColumns = (props) => (
  <div id="home-dash-columns">
    <HomeEditor />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}
    >
      <HomeTutorialVideo />
      <HomeNews />
    </div>
  </div>
)

export default DashboardColumns;