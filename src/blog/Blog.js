import React, { useMemo } from 'react';
import { uniques } from '../utils/array';
import { makeStyles } from '@material-ui/core';
import DateBullet from './DateBullet';
import PostCard from './PostCard';
import mockedPosts from './posts.mock';

const Blog = () => {
  const classes = useStyles();

  const groupMemo = useMemo(() => {
    const dates = mockedPosts.map(p => p.date);
    const mapYear = d => new Date(d).getUTCFullYear();
    const years = dates.map(mapYear).filter(uniques);
    const groupByYear = (year, list) =>
      list.filter(p => new Date(p.date).getUTCFullYear() === year);
    const groupDates = years.map(year => ({
      year,
      posts: groupByYear(year, mockedPosts)
    }));
    return groupDates.map((group, i) => (
      <div className={classes.group} key={i}>
        {group.posts.map((post, j) => (
          <div className={classes.item} key={j}>
            <DateBullet
              date={post.date}
              first={j === 0}
              last={j === group.posts.length - 1}
            />
            <PostCard {...post} first={j === 0} />
          </div>
        ))}
      </div>
    ));
  }, [classes]);

  return <>{groupMemo}</>;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  group: {
    width: '100%'
  },
  item: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}));

export default Blog;
