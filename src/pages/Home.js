import { makeStyles, Container, Typography, Box, useMediaQuery } from '@material-ui/core';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  home: {
    width: 'calc(100% - 1rem)',
    minHeight: '100vh',
    marginRight: '1rem',
    paddingTop: 100,
  },
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    textAlign: 'center',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
    },
  },
  title: {
    width: '100%',
    fontSize: '5rem',
    textAlign: 'center',
    color: '#EF4444',
    '@media (min-width: 480px)': {
      height: 150,
    },
    '@media (min-width: 576px)': {
      fontSize: '5.5rem',
    },
    '@media (min-width: 900px)': {
      width: '50%',
      fontSize: '8rem',
    },
  },
  titleContainer: {
    height: 93.5,
    margin: '25px 0',
    overflow: 'hidden',
    '@media (min-width: 360px)': {
      margin: '35px 0',
    },
    '@media (min-width: 768px)': {
      margin: '0 0',
    },
    '@media (min-width: 900px)': {
      height: 150,
      margin: '150px 0',
    },
    '& div': {
      '@media (min-width: 480px)': {
        height: 150,
      },
    },
  },
  personTitle: {
    margin: '25px auto',
    '@media (min-width: 360px)': {
      margin: '35px auto',
    },
    '@media (max-width: 480px)': {
      width: 309,
    },
    '@media (min-width: 900px)': {
      fontSize: '5rem',
      width: '50%',
      margin: '50px auto',
      textAlign: 'left',
    },
    '@media (min-width: 956px) and (max-width: 1132px)': {
      margin: '75px auto',
    },
    '@media (min-width: 1133px)': {
      fontSize: '6rem',
    },
  },
});

const Home = () => {
  const classes = useStyles();
  const isBiggerThan480 = useMediaQuery('(min-width: 480px)');

  return (
    <div className={classes.home}>
      <Container className={classes.container}>
        <Typography variant='h1' className={classes.title}>
          <motion.div className={classes.titleContainer} animate={{ scale: [0, 1], transition: { duration: 1, delay: 1 } }}>
            <motion.div animate={{ y: isBiggerThan480 ? [150, 0, -150, -300, -450] : [93.5, 0, -93.5, -187, -280.5] }} transition={{ repeat: Infinity, duration: 8 }}>
              <Box>The</Box>
              <Box>Web</Box>
              <Box>GOAT</Box>
            </motion.div>
          </motion.div>
        </Typography>
        <Typography variant='h1' className={classes.personTitle}>
          <motion.div animate={{ y: [-5000, 200, 0], opacity: [0, 1], transition: { duration: 1 } }}>
            <Box>Hello,</Box>
            <Box>I'm Shaher</Box>
            <Box>Ashraf</Box>
          </motion.div>
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
