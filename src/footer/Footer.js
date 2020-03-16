import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container disableGutters fixed maxWidth='md' className={classes.content}>
        <Typography variant='body2'>
          © 2020 by jhomartinez.com. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    bottom: 0,
    left: 0,
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    position: 'static',
    width: '100%'
  },
  content: {
    borderTopColor: theme.palette.divider,
    borderTopStyle: 'solid',
    borderTopWidth: 2
  }
}));

export default Footer;
