import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { uniques } from '../utils/array';
import { makeStyles } from '@material-ui/core';
import DateBullet from './DateBullet';

const Timeline = ({ dates }) => {
  const classes = useStyles();

  const groupMemo = useMemo(() => {
    const mapYear = d => new Date(d).getUTCFullYear();
    const years = dates.map(mapYear).filter(uniques);
    const getDatesByYear = (year, list) =>
      list.filter(d => new Date(d).getUTCFullYear() === year);
    const groupDates = years.map(year => ({
      year,
      dates: getDatesByYear(year, dates)
    }));
    return groupDates.map((group, i) => (
      <div className={classes.group} key={i}>
        <Typography variant='h5' color='secondary'>
          {group.year}
        </Typography>
        {group.dates.map((date, j) => (
          <DateBullet date={date} key={j} first={j === 0} last={j === group.dates.length - 1} />
        ))}
      </div>
    ));
  }, [classes, dates]);

  return <div className={classes.root}>{groupMemo}</div>;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  group: {
    textAlign: 'center'
  }
}));

Timeline.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Timeline;
