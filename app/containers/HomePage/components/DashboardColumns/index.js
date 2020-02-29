import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';
import BotStats from '../BotStats';
import HomeEditor from '../HomeEditor';
import HomeNews from '../HomeNews';

const DashboardColumns = (props) => (
  <div id="home-dash-columns">
    <BotStats />
    <HomeEditor />
    <HomeNews />
  </div>
)

export default DashboardColumns;