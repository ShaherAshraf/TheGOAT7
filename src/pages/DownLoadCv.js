import { Container, makeStyles, Typography, Card } from '@material-ui/core';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  DownLoadCv: {
    width: 'calc(100% - 1rem)',
    minHeight: '100vh',
    marginRight: '1rem',
    paddingTop: 100,
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
    },
  },
  card: {
    backgroundColor: '#EF4444',
    width: '70%',
    padding: '2rem 0',
    margin: '0 auto',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#5EEAD4',
      '& h2': {
        color: '#f3f4f6',
      },
    },
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f3f4f6',
    '@media (max-width: 480px)': {
      fontSize: '1.75rem',
    },
  },
});

const DownLoadCv = () => {
  const classes = useStyles();

  return (
    <div className={classes.DownLoadCv}>
      <Container className='downloadCv' maxWidth='md'>
        <motion.div animate={{ rotateY: [0, 360, 0] }} transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }} whileHover={{ rotateY: 0, transition: { duration: 1 } }}>
          <a target='_blank' href='https://drive.google.com/file/d/1zwEez4bvcJsN0p7Me-WgLz9GixahX4o9/view?usp=sharing'>
            <Card className={classes.card} variant="outlined">
              <Typography variant='h2' className={classes.title}>
                DownLoad CV
              </Typography>
            </Card>
          </a>
        </motion.div>
      </Container>
    </div>
  );
};

export default DownLoadCv;
