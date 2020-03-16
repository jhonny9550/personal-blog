import React from 'react';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.main}>
          <Avatar
            alt='Jhonny Martinez'
            src='/static/images/photo.jpg'
            className={classes.avatar}
          />
          <Typography variant='h4'>Jhonny Martinez</Typography>
          <Typography variant='body1'>
            Fullstack Developer{' '}
            <span role='img' aria-label='laptop'>
              💻
            </span>
            <br />
            and Backpacking lover{' '}
            <span role='img' aria-label='landscape'>
              🌄
            </span>
          </Typography>
          <div>
            <a
              className={classes.link}
              href='https://github.com/jhonny9550'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IconButton color='primary' aria-label='GitHub'>
                <GitHubIcon />
              </IconButton>
            </a>
            <a
              className={classes.link}
              href='https://www.linkedin.com/in/jhonny9550/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IconButton color='primary' aria-label='LinkedIn'>
                <LinkedInIcon />
              </IconButton>
            </a>
            <a
              className={classes.link}
              href='https://twitter.com/jhotinez'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IconButton color='primary' aria-label='Twitter'>
                <TwitterIcon />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.section}>
          <Typography variant='h4'>Me</Typography>
          <Typography variant='body1'>
            Hi! This is a little introduction about me. I born 25 years ago in
            Cali (Colombia). I'm a Multimedia Engineer and I like to share my
            experiences and knowledge.
          </Typography>
          <Typography variant='body1' className={classes.accent}>
            <span role='img' aria-label='eggs'>
              🍳
            </span>
            My favourite dish is rice with scrambled eggs.
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography variant='h4'>Job</Typography>
          <Typography variant='body1'>
            I'm Fullstack Developer mostly focused on JavaScript technologies
            such as ReactJs, Angular and NodeJS. Currently, I'm working as a
            freelance in Melbourne, Australia.
          </Typography>
          <Typography variant='body1' className={classes.accent}>
            <span role='img' aria-label='eggs'>
              👨🏾‍💻
            </span>
            I like Python and DevOps with GCP as well.
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography variant='h4'>Hobbies</Typography>
          <Typography variant='body1'>
            I love to travel as a backpacker and meet unbelievable natural
            places! I like to share my experiences and motivate people to
            backpack! I like to keep learning, quite important for me.
          </Typography>
          <Typography variant='body1' className={classes.accent}>
            <span role='img' aria-label='eggs'>
              🙋🏾‍♂️
            </span>
            I like to help people with their job and travels.
          </Typography>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  main: {
    textAlign: 'center',
    '& > h4': {
      fontWeight: 500
    },
    '& > *': {
      lineHeight: 1.5
    }
  },
  avatar: {
    height: theme.spacing(30),
    margin: '0.5em auto',
    width: theme.spacing(30)
  },
  accent: {
    color: theme.palette.secondary.dark,
    fontWeight: 700
  },
  section: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    '& > h4': {
      fontWeight: 500
    },
    '& > p > span': {
      marginRight: theme.spacing(0.5)
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(5)
    }
  },
  info: {
    padding: theme.spacing(4),
    maxWidth: 500,
    [theme.breakpoints.up('sm')]: {
      padding: 'unset'
    }
  },
  link: {
    textDecoration: 'none',
    fontStyle: 'none',
    color: 'inherit'
  }
}));

export default Home;
