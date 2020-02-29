import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';

const BotStats = (props) => (
  <div id="bot-stats" className="dash-column">
    <Card className="dash-column-card">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rgVdgR1y1Dg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Card>
  </div>
)

export default BotStats;