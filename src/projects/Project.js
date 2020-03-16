import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ProjectCard from './ProjectCard';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Project = ({ description, image, reversed, subtitle, tags, title }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <div className={clsx([classes.root, { [classes.reversed]: reversed }])}>
      <div
        className={clsx([classes.project, { [classes.invertLine]: reversed }])}
      >
        <ProjectCard
          description={description}
          image={image}
          subtitle={subtitle}
          title={title}
        />
      </div>
      <div className={classes.tags}>
        {tags.map((t, i) => (
          <Typography color='textSecondary' variant='h4' key={i}>
            <Link className={classes.link} to={`/${location.pathname}#${t}`}>
              #{t}
            </Link>
          </Typography>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  project: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    position: 'relative',
    '&::after': {
      borderColor: theme.palette.divider,
      borderStyle: 'solid',
      borderWidth: 1,
      content: "''",
      left: '100%',
      position: 'absolute',
      top: 'calc(50% - 2px)',
      height: 2,
      width: '50%',
      'z-index': -1
    }
  },
  reversed: {
    flexDirection: 'row-reverse'
  },
  invertLine: {
    '&::after': {
      left: 'unset',
      right: '100%'
    }
  },
  tags: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7)
  },
  link: {
    textDecoration: 'none',
    fontStyle: 'none',
    color: 'inherit',
    lineHeight: 1.3,
    fontWeight: 700,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}));

Project.defaultProps = {
  tags: []
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reversed: PropTypes.bool,
  subtitle: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default Project;
