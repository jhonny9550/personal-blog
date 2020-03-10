import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core';
import { ROUTE_NAMES } from '../Routes';

const HideOnScroll = props => {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window });
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
      <div>
        <AppBar position='sticky' elevation={0} className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Container className={classes.container} maxWidth='lg'>
              <Toolbar>
                <Logo className={classes.logo} />
                <div className={classes.nav}>
                  <NavLink
                    activeClassName={classes.active}
                    className={classes.link}
                    exact
                    to={ROUTE_NAMES.HOME}
                  >
                    about me
                  </NavLink>
                  <NavLink
                    activeClassName={classes.active}
                    className={classes.link}
                    to={ROUTE_NAMES.BLOG}
                  >
                    blog
                  </NavLink>
                  <NavLink
                    activeClassName={classes.active}
                    className={classes.link}
                    to={ROUTE_NAMES.PROJECTS}
                  >
                    projects
                  </NavLink>
                </div>
              </Toolbar>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
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
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  link: {
    color: theme.palette.text.primary,
    fontWeight: 700,
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  logo: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(10)
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
