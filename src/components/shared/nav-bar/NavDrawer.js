import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem component={Link} to="/webinars">
            <ListItemIcon> <EventIcon color="primary" /> </ListItemIcon>
            <ListItemText primary={"Event"} />
        </ListItem>
        <ListItem component={Link} to="/groups">
            <ListItemIcon> <GroupWorkIcon color="primary" /> </ListItemIcon>
            <ListItemText primary={"Groups"} />
        </ListItem>
        <ListItem component={Link} to="/chats">
            <ListItemIcon> <ChatIcon color="primary" /> </ListItemIcon>
            <Badge badgeContent={4} color="error"><ListItemText primary={"Chats"} /></Badge>
        </ListItem>
        <ListItem component={Link} to="/my-profile">
            <ListItemIcon> <PersonIcon color="primary" /> </ListItemIcon>
            <ListItemText primary={"Profile"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <IconButton
                color="inherit"
            >
                <MenuIcon fontSize="large" onClick={toggleDrawer(anchor, true)} />
            </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}