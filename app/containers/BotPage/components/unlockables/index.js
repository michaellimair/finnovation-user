import React from 'react';
import './styles.css';
import LockIcon from '@material-ui/icons/Lock';

const UnlockableItem = ({name}) => (
  <div className="unlockable-item">
    <LockIcon color="disabled" className="locked-icon" />
    {name} 
  </div>
)

const UnlockableSkills = () => {
  const unlockableItems = [
    {
      name: "Trading Skill 1",
      description: "abc"
    },
    {
      name: "Trading Skill 2",
      description: "abc"
    },
    {
      name: "Trading Skill 3",
      description: "abc"
    },
    {
      name: "Trading Skill 4",
      description: "abc"
    },
    {
      name: "Trading Skill 5",
      description: "abc"
    },
    {
      name: "Trading Skill 6",
      description: "abc"
    },
    {
      name: "Trading Skill 7",
      description: "abc"
    },
  ];

  return (
    <div id="unlockables">
      <div id="unlockable-title">Upgrade your bot with these available skills</div>
      <div id='unlockable-itemlist'>
        <div id="unlockable-list">
          {
            unlockableItems.map(({name}) => <UnlockableItem name={name} />)
          }
        </div>
        <div id="unlockable-detail">
          def
        </div>
      </div>
    </div>
  );
}

export default UnlockableSkills;