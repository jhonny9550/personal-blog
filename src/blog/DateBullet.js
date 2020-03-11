import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { monthNames } from '../utils/date';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const DateBullet = ({ date, first, last }) => {
  const classes = useStyles();
  date = new Date(date);
  return (
    <div
      className={clsx([
        classes.root,
        { [classes.first]: first, [classes.last]: last }
      ])}
    >
      <div className={classes.circle}>
        <Typography variant='h3' color='textSecondary'>
          {date.getUTCDate()}
        </Typography>
        <Typography variant='subtitle1' color='textSecondary'>
          {monthNames[date.getUTCMonth()].substr(0, 3)}
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
    position: 'relative',
    '&::after': {
      border: 1,
      borderColor: theme.palette.divider,
      borderStyle: 'solid',
      bottom: 0,
      content: "''",
      height: '100%',
      left: 'calc(50% - 1px)',
      position: 'absolute',
      width: 1,
      'z-index': -1
    }
  },
  circle: {
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.divider,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'column',
    height: 120,
    justifyContent: 'center',
    padding: theme.spacing(2),
    textAlign: 'center',
    width: 120
  },
  first: {
    paddingTop: theme.spacing(10)
  },
  last: {
    paddingBottom: theme.spacing(10)
  }
}));

DateBullet.propTypes = {
  date: PropTypes.string.isRequired,
  first: PropTypes.bool,
  last: PropTypes.bool
};

export default DateBullet;
