import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';
import BotStats from '../BotStats';
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
      <BotStats />
      <HomeNews />
    </div>
  </div>
)

export default DashboardColumns;