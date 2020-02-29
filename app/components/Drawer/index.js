import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
// import store from '../../reducers'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ProfileIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const RobotIcon = () => <FontAwesomeIcon icon={faRobot} />;
const StudyIcon = () => <FontAwesomeIcon icon={faGraduationCap} />;

const CustomDrawer = ({drawerOpened, toggleDrawer, navigateToPage}, props) => {
  const classes = useStyles();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          {
            name: 'Home',
            icon: HomeIcon,
            path: '/'
          },
          {
            name: 'Bot',
            icon: RobotIcon,
            path: '/bot'
          },
          {
            name: 'Tutorial',
            icon: StudyIcon,
            path: '/tutorial'
          }
        ].map(({name, icon: Icon, path}, index) => (
          <ListItem button key={name} onClick={() => navigateToPage(path, name)}>
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <Drawer open={drawerOpened} onClose={() => toggleDrawer(false)}>
      {sideList()}
    </Drawer>
  );
};

export default CustomDrawer;
