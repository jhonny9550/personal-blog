import React from 'react';
import { makeStyles } from '@material-ui/core';
import mockedPosts from './posts.mock';
import Timeline from './Timeline';

const Blog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Timeline dates={mockedPosts.map(p => p.date)} />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {},
  timeline: {}
}));

export default Blog;
