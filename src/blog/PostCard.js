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

const PostCard = ({ description, reading, thumbnail, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
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
            <WatchLater color="secondary" />
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
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
    maxHeight: 200,
    maxWidth: 700,
    overflow: 'hidden'
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
    position: 'relative'
  },
  actions: {
    bottom: 0,
    justifyContent: 'space-between',
    left: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    position: 'absolute',
    width: '100%'
  },
  reading: {
    alignItems: 'center',
    display: 'flex',
    '& > span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  }
}));

export default PostCard;
