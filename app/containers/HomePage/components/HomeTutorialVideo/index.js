import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';

const HomeTutorialVideo = (props) => (
  <div id="home-tutor" className="dash-column">
    <Card className="dash-column-card">
      <iframe src="https://www.youtube.com/embed/OGFxp3Pixg8" id="tutor-vid" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="rsi-vid" />
      {/* <iframe></iframe> */}
    </Card>
  </div>
)

export default HomeTutorialVideo;