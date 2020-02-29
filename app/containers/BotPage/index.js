import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import robotImage from '../../images/trading_bot.jpg';

import './styles.css';
import BotSkillsDragDrop from './components/dragDrop';
import UnlockableSkills from './components/unlockables';

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

const BotDetails = (props) => (
  <div style={{flexDirection: 'row', display: 'flex'}}>
    <BotSkillsDragDrop />
  </div>
)

const BotPage = (props) => (
  <div id="bot-page">
    <BotHeaderDisplay />
    <BotDetails />
    <UnlockableSkills />
  </div>
)

export default BotPage;