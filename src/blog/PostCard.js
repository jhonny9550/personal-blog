import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import WatchLater from '@material-ui/icons/WatchLater';
import ArrowForward from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';

const PostCard = ({ description, first, reading, thumbnail, title }) => {
  const classes = useStyles();
  return (
    <Card className={clsx([classes.root, { [classes.first]: first }])} raised>
      <CardMedia className={classes.media} image={thumbnail} title={title} />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography
          className={classes.description}
          variant='body1'
          color='textSecondary'
          component='p'
        >
          {description}
        </Typography>
        <CardActions className={classes.actions}>
          <span className={classes.reading}>
            <WatchLater color='secondary' />
            <span>{reading} minutes reading</span>
          </span>
          <Button size='small' color='secondary' endIcon={<ArrowForward />}>
            Read
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      maxHeight: 200,
      width: 700,
      flexDirection: 'row'
    }
  },
  media: {
    height: 200,
    minWidth: 200
  },
  description: {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  },
  content: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      '&:last-child': {
        paddingBottom: 0
      }
    }
  },
  actions: {
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
    position: 'relative',
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up('sm')]: {
      bottom: 0,
      left: 0,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      position: 'absolute',
      width: '100%'
    }
  },
  reading: {
    alignItems: 'center',
    display: 'flex',
    '& > span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  },
  first: {
    marginTop: '3rem'
  }
}));

export default PostCard;
