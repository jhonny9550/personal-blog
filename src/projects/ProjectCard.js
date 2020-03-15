import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ProjectCard = ({ description, image, subtitle, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={title} className={classes.title} />
      <CardMedia title={title} className={classes.image}>
        <img src={image} alt={title} height='auto' width='50%' />
      </CardMedia>
      <CardContent className={classes.content}>
        <Typography variant='subtitle1'>{subtitle}</Typography>
        <Typography variant='body1'>{description}</Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 20,
    maxWidth: 400
  },
  title: {
    color: theme.palette.secondary.main
  },
  content: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  },
  image: {
    textAlign: 'center'
  }
}));

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default ProjectCard;
