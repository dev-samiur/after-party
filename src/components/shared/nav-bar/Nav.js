import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import NavDrawer from './NavDrawer'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
      background: theme.palette.primary.background,
      color: '#000',
  },   
  toolbar: {
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    flexGrow: 1,
  },
  titleText: {
    background: theme.palette.primary.main,
    color: '#FFF',
    textAlign: 'center',
    width: 120,
    padding: '5px 0px',
    cursor: 'pointer',
  },
  search: {
    border: '1px solid #ccc',
    borderRadius: 5,
    flexGrow: 3,
    display: 'none',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    maxWidth: 400,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      display: 'block',
      marginRight: 50,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  sectionDesktop: {
    flexGrow: 2,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export function Nav() {
  const classes = useStyles();

  return (
    <div style={{background: '#fff'}}>
        <Container className={classes.grow}>
            <AppBar position="static" elevation={0} className={classes.appbar}>
                <Toolbar className={classes.toolbar} >
                    <div className={classes.title}>
                        <Typography className={classes.titleText} variant="h6" noWrap>
                            After Party
                        </Typography>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit">Events</Button>
                        <Button color="inherit">Groups</Button>
                        <Badge badgeContent={4} color="error">
                            <Button color="inherit">Chats</Button>
                        </Badge>
                        <Button color="inherit">Profile</Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            color="inherit"
                        >
                            <SearchIcon fontSize="large" />
                        </IconButton>   
                        <NavDrawer/>
                    </div>
                </Toolbar>
             </AppBar>
            </Container>
    </div>
  );
}
