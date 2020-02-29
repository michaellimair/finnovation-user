import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';

const HomeEditor = (props) => (
  <div id="home-editor" className="dash-column">
    <Card className="dash-column-card">
      <iframe src="https://5e5a327b6760e.htmlsave.com/" id="blockly-frame" title="blockly"></iframe>
    </Card>
  </div>
)

export default HomeEditor;