import { AppBar, Container, makeStyles } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { useState, useRef, useEffect } from 'react';
import logo from '../assets/images/Logo.svg';
import useScroll from '../hooks/useScroll';

const useStyles = makeStyles({
  AppBar: {
    width: `calc(100% - 3rem)`,
    marginRight: '1rem',
    padding: '1rem',
    position: 'fixed',
    top: 0,
    right: 0,
    backgroundColor: '#F3F4F6',
    transition: 'all 0.3s ease-in-out',
  },
  hideAppBar: {
    transform: 'translateY(-100px)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    maxWidth: 64,
    transition: 'all 0.3s ease-in-out',
    cursor: `pointer`,
  },
  socialLinks: {
    width: 55,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a': {
      color: '#1F2937',
      transition: '0.5s',
      '&:hover': {
        color: '#EF4444',
      },
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const [previousPos, setPreviousPos] = useState(0);
  const [show, setShow] = useState(true);
  const { bodyScrollBar } = useScroll();
  const headerRef = useRef();
  const logoRef = useRef();

  const handleScroll = () => {
    const currentPos = bodyScrollBar.current.scrollTop;
    if (bodyScrollBar.current.scrollTop > 250) {
      if (currentPos > previousPos) {
        setShow(false);
      }
      if (previousPos > currentPos) {
        setShow(true);
      }
      headerRef.current.style.filter = 'drop-shadow(0 -10px 20px rgb(170, 170, 170))';
      headerRef.current.style.padding = '0.3rem 1rem';
      logoRef.current.style.width = '50px';
    } else {
      headerRef.current.style = 'none';
      logoRef.current.style.width = 'auto';
    }
    setPreviousPos(currentPos);
  };

  useEffect(() => {
    bodyScrollBar.current.addListener(handleScroll);
    return () => bodyScrollBar.current.removeListener(handleScroll);
  }, [handleScroll]);

  return (
    <AppBar ref={headerRef} className={show ? classes.AppBar : classes.hideAppBar} elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container className={classes.container}>
        <img className={classes.logo} ref={logoRef} src={logo} alt='Website Logo' onClick={() => bodyScrollBar.current.scrollTo(0, 0, 2000)} />
        <div className={classes.socialLinks}>
          <a target='_blank' href='https://github.com/the-goat7'>
            <GitHub></GitHub>
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/shaher88223/'>
            <LinkedIn></LinkedIn>
          </a>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
