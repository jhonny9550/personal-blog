import React from 'react';
import { makeStyles } from '@material-ui/core';
import mockedPosts from './posts.mock';
import Timeline from './Timeline';
import Posts from './Posts';

const Blog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Timeline dates={mockedPosts.map(p => p.date)} />
      <Posts posts={mockedPosts} />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: { display: 'flex', justifyContent: 'space-around' }
}));

export default Blog;
