import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant='body2'>
        © 2020 by jhomartinez.com. All rights reserved.
      </Typography>
    </footer>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    borderTopColor: theme.palette.divider,
    borderTopStyle: 'solid',
    borderTopWidth: 2,
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4)
  }
}));

export default Footer;
