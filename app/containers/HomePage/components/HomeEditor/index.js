import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';
import editor from './editor.html';

const HomeEditor = (props) => (
  <div id="home-editor" className="dash-column">
    <Card className="dash-column-card">
      <iframe src="https://5e5a3add302a2.htmlsave.com/" id="blockly-frame" title="blockly"></iframe>
    </Card>
  </div>
)

export default HomeEditor;