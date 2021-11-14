import { Container, makeStyles, Typography, Avatar, Box } from '@material-ui/core';
import AvatarImage from '../assets/images/avatar.jpg';

const useStyles = makeStyles({
  about: {
     width: 'calc(100% - 1rem)',
    minHeight: '100vh',
    marginRight: '1rem',
    paddingTop: 100,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 80,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      textAlign: 'left',
    },
  },
  avatar: {
    width: 225,
    height: 225,
    border: '5px solid #F3F4F6',
    outline: '2px solid #5EEAD4',
    margin: '0 auto 30px',
    '@media (min-width: 900px)': {
      margin: 0,
    },
  },
  textBox: {
    '@media (min-width: 900px)': {
      width: '65%',
    },
  },
  personalTitle: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  personalStatement: {
    width: '75%',
    margin: '0 auto',
    fontSize: '1.2rem',
    lineHeight: '1.8',
    fontFamily: 'roboto',
    color: '#7a7a7b',
    '@media (min-width: 900px)': {
      width: '100%',
    },
    '& span': {
      color: '#EF4444',
      fontWeight: 'bold',
    },
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.about}>
      <Container maxWidth='md'>
        <Typography variant='h2' className={classes.title}>
          About Me
        </Typography>
        <Container maxWidth='md' className={classes.infoContainer}>
          <Avatar alt='Personal Photo' src={AvatarImage} className={classes.avatar} />
          <Box className={classes.textBox}>
            <Typography variant='h3' className={classes.personalTitle}>
              Shaher Ashraf
            </Typography>
            <Typography variant='body1' className={classes.personalStatement}>
              A meticulous <span>frontend developer</span> with solid experience and passion for responsive website design and a firm believer in the mobile-first approach, seeking a position where I
              can enhance my knowledge of design principles and grow with the organization.
            </Typography>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default About;
