import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';
import editor from './editor.html';

const HomeEditor = (props) => (
  <div id="home-editor" className="dash-column">
    <Card className="dash-column-card">
      <iframe src="https://lzl.red/editor.html" id="blockly-frame" title="blockly"></iframe>
    </Card>
  </div>
)

export default HomeEditor;