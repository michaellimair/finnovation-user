import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';

export class BotStats extends React.Component {

  openChart = () => {
    window.open("https://lzl.red/name", "_top")
  }

  render() {
    let win = window.open();
    return (
      <div id="bot-stats" className="dash-column">
    <Card className="dash-column-card">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/OGFxp3Pixg8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <button onClick={this.openChart}>Explore Charts</button>
    </Card>
  </div>
    )
  }
}

export default BotStats;