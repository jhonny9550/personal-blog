import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import PostCard from './PostCard';

const Posts = ({ posts }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {posts.map((p, i) => (
        <PostCard {...p} key={i} />
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {}
}));

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

Posts.defaultProps = {
  posts: []
};

export default Posts;
