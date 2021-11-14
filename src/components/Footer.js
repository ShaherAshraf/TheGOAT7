import { Divider, makeStyles, Container, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';

const useStyles = makeStyles({
  Footer: {
    width: 'calc(100% - 1rem)',
    marginRight: '1rem',
    padding: '50px 0',
    textAlign: 'center',
  },
  title: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    margin: '3px 0',
    color: '#7a7a7b',
    fontFamily: 'roboto',
    '& > span': {
      display: 'flex',
      alignItems: 'center',
      '& > svg': {
        marginTop: -2,
        marginRight: 6,
        fontSize: 18,
      },
    },
    '& > span:last-child': {
      color: '#1F2937',
      fontSize: '1rem',
      fontWeight: 'bold',
      marginLeft: 6,
    },
  },
  underLine: {
    padding: 4,
    width: 50,
    backgroundColor: '#5EEAD4',
    margin: '0 auto',
    position: 'relative',
    marginTop: -15,
    right: -60,
    '@media (max-width: 287px)': {
      right: 0,
    },
  },
  divider: {
    width: '100%',
    margin: '1rem auto',
    marginTop: 100,
    marginBottom: 50,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.Footer}>
      <Container maxWidth='md'>
        <Divider className={classes.divider} variant='fullWidth'></Divider>
        <Typography className={classes.title} variant='body2'>
          <span>
            <Copyright />
            Copyright 2022
          </span>
          <span>TheGOAT7.</span>
        </Typography>
        <div className={classes.underLine}></div>
        <Typography className={classes.title} variant='body2'>
          All rights reserved.
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
