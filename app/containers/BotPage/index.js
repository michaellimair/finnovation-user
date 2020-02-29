import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import robotImage from '../../images/trading_bot.jpg';

import './styles.css';

const BotImage = () => (
  <div id="robot-icon">
    <img src={robotImage} alt="Robot" />
  </div>
);

const BotHeaderDisplay = () => {
  const botName = "Michael's Bot";
  const levelString = "Level 10";
  return (
    <div id="bot-header">
      <BotImage />
      <div id="bot-header-info">
        <div>{botName}</div>
        <div>{levelString}</div>
      </div>
    </div>
  );
}

const BotDetails = (props) => <div>botdetails</div>

const BotPage = (props) => (
  <div id="bot-page">
    <BotHeaderDisplay />
    <BotDetails />
  </div>
)

export default BotPage;