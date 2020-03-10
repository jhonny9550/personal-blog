import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, Typography } from '@material-ui/core';
import { ROUTE_NAMES } from '../Routes';

const HideOnScroll = props => {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const Nav = () => {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar position='sticky' elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar} disableGutters>
          <Container className={classes.container} maxWidth='md' disableGutters>
            <Link className={classes.logo} to={ROUTE_NAMES.HOME}>
              <Logo />
            </Link>
            <div className={classes.nav}>
              <NavLink
                activeClassName={classes.active}
                className={classes.link}
                exact
                to={ROUTE_NAMES.HOME}
              >
                <Typography variant='body1'>about me</Typography>
              </NavLink>
              <NavLink
                activeClassName={classes.active}
                className={classes.link}
                to={ROUTE_NAMES.BLOG}
              >
                <Typography variant='body1'>blog</Typography>
              </NavLink>
              <NavLink
                activeClassName={classes.active}
                className={classes.link}
                to={ROUTE_NAMES.PROJECTS}
              >
                <Typography variant='body1'>projects</Typography>
              </NavLink>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

const useStyles = makeStyles(theme => ({
  active: {
    color: `${theme.palette.secondary.dark} !important`,
    borderBottomColor: theme.palette.secondary.dark,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    marginBottom: -2
  },
  appbar: {
    paddingTop: theme.spacing(3)
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  link: {
    color: theme.palette.text.primary,
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    textDecoration: 'none',
    textTransform: 'capitalize'
  },
  logo: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(10),
    '& > *': {
      height: 80,
      width: 80,
      [theme.breakpoints.up('lg')]: {
        height: 'unset',
        width: 'unset'
      }
    }
  },
  nav: {
    borderBottomColor: theme.palette.divider,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
  toolbar: {
    backgroundColor: theme.palette.background.default
  }
}));

export default Nav;
