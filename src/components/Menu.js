import { Drawer, Container, makeStyles, Grid } from '@material-ui/core';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import menuLogo from '../assets/images/menuLogo.svg';
import useScroll from '../hooks/useScroll';

const drawerWidth = '100vw';

const useStyles = makeStyles({
  menuBar: {
    width: '2rem',
    minHeight: '100vh',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      color: '#1F2937',
    },
    cursor: 'pointer',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#5EEAD4',
    overflowX: 'hidden',
  },
  mainContainer: {
    width: 'calc(100% - 2rem)',
    minHeight: '100vh',
    marginLeft: '2rem',
    padding: '50px',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    margin: '0 auto',
  },
  gridContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '@media (min-width: 600px)': {
      margin: '0 auto',
      justifyContent: 'space-between',
    },
  },
  menuLogo: {
    width: '50%',
    margin: '0 auto 25px',
    '@media (min-width: 480px)': {
      width: '35%',
    },
    '@media (min-width: 600px)': {
      width: '100%',
    },
  },
  navMenu: {
    '@media (min-width: 600px)': {
      display: 'flex',
      justifyContent: 'space-around',
    },
    '& > ul': {
      color: '#1F2937',
      textAlign: 'center',
      listStyle: 'none',
      fontSize: '2rem',
      fontFamily: 'arvo',
      fontWeight: 'bold',
      '& > li': {
        margin: '10px 0',
        cursor: 'pointer',
        transition: '0.2s',
        '&:hover': {
          color: '#f3f4f6',
        },
      },
    },
  },
});

const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { bodyScrollBar } = useScroll();

  const handleScroll = (e) => {
    setOpen(!open);
    if (e.target.textContent === 'Home') {
      bodyScrollBar.current.scrollTo(0, 0, 1500);
    } else if (e.target.textContent === 'Download CV') {
      const targetedSection = document.querySelector('.downloadCv');
      bodyScrollBar.current.scrollTo(0, targetedSection.offsetTop - 250, 1500);
    } else {
      const sectionsTitles = document.querySelectorAll('h2');
      for (let title of sectionsTitles) {
        if (title.textContent.startsWith(e.target.textContent)) {
          bodyScrollBar.current.scrollTo(0, title.offsetTop - 80, 1500);
        }
      }
    }
  };

  return (
    <div className='Menu'>
      <Drawer variant='temporary' open={open} classes={{ paper: classes.drawerPaper }}>
        <div className={classes.menuBar} onClick={() => setOpen(!open)} style={open ? { backgroundColor: '#F3F4F6' } : null}>
          <ChevronLeft fontSize='large'></ChevronLeft>
        </div>
        <div className={classes.mainContainer}>
          <Container className={classes.container} maxWidth='md'>
            <Grid className={classes.gridContainer} container>
              <Grid item xs={12} sm={4}>
                <motion.img className={classes.menuLogo} src={menuLogo} alt='Menu logo' animate={{ x: [5000, -100, 0], rotateZ: [-90, 0], transition: { duration: 1 } }}></motion.img>
              </Grid>
              <Grid item xs={12} sm={6}>
                <nav className={classes.navMenu}>
                  <motion.ul animate={{ opacity: [0, 1], x: [-5000, 100, 0], transition: { duration: 1 } }}>
                    <motion.li onClick={handleScroll} whileHover={{ x: 10 }}>
                      Home
                    </motion.li>
                    <motion.li onClick={handleScroll} whileHover={{ x: 10 }}>
                      About
                    </motion.li>
                    <motion.li onClick={handleScroll} whileHover={{ x: 10 }}>
                      Skills
                    </motion.li>
                    <motion.li onClick={handleScroll} whileHover={{ x: 10 }}>
                      Works
                    </motion.li>
                    <motion.li onClick={handleScroll} whileHover={{ x: 10 }}>
                      Download CV
                    </motion.li>
                    <motion.li onClick={handleScroll} whileHover={{ x: 10 }}>
                      Contact
                    </motion.li>
                  </motion.ul>
                </nav>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Drawer>
      <div className={classes.menuBar} onClick={() => setOpen(!open)} style={!open ? { backgroundColor: '#5EEAD4' } : null}>
        <ChevronRight fontSize='large'></ChevronRight>
      </div>
    </div>
  );
};

export default Menu;
