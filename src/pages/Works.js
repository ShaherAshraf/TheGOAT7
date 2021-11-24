import { Container, makeStyles, Typography, Tabs, Tab, Paper, Grid, Card, Box, CardContent } from '@material-ui/core';
import { Visibility, Code } from '@material-ui/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

// ScreenShots
import browserTab from '../assets/images/works/browserTab.svg';
import TheGOAT7Resume from '../assets/images/works/TheGOAT7Resume.png';
import TheGOAT7 from '../assets/images/works/TheGOAT7.png';
import Galleria from '../assets/images/works/Galleria.png';
import Mate from '../assets/images/works/Mate.png';
import SmartTodo from '../assets/images/works/SmartTodo.png';
import loopStudios from '../assets/images/works/loopStudios.png';
import Fylo from '../assets/images/works/Fylo.png';

// Projects
const projects = [
  { title: 'TheGOAT7 RESUME', category: 'HTML/CSS', screenshot: TheGOAT7Resume, liveDemo: 'https://thegoat7-resume.netlify.app/', sourceCode: 'https://github.com/the-goat7/TheGOAT7-RESUME' },
  { title: 'TheGOAT7', category: 'React', screenshot: TheGOAT7, liveDemo: 'https://thegoat7.netlify.app/', sourceCode: 'https://github.com/the-goat7/TheGOAT7-portfolio' },
  { title: 'Galleria', category: 'React', screenshot: Galleria, liveDemo: 'https://galleria-arts.netlify.app/', sourceCode: 'https://github.com/the-goat7/galleria' },
  { title: 'Mate', category: 'Bootstrap', screenshot: Mate, liveDemo: 'https://mate-template.netlify.app/', sourceCode: 'https://github.com/the-goat7/mate-landing-page' },
  { title: 'SmartTodo', category: 'JavaScript', screenshot: SmartTodo, liveDemo: 'https://smart-todo.netlify.app/', sourceCode: 'https://github.com/the-goat7/smart-todo' },
  { title: 'loopStudios', category: 'HTML/CSS', screenshot: loopStudios, liveDemo: 'https://loopstudioz.netlify.app/', sourceCode: 'https://github.com/the-goat7/loopstudios-landing-page' },
  { title: 'Fylo', category: 'HTML/CSS', screenshot: Fylo, liveDemo: 'https://darkthemefylo.netlify.app/', sourceCode: 'https://github.com/the-goat7/fylo-landing-page' },
];

// Styles
const useStyles = makeStyles({
  works: {
    width: 'calc(100% - 1rem)',
    minHeight: '100vh',
    marginRight: '1rem',
    paddingTop: 100,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 80,
  },
  tabs: {
    backgroundColor: '#F3F4F6',
    padding: '0 0',
    '& > * > .MuiTabs-flexContainer': {
      justifyContent: 'space-between',
    },
    '& > * > .MuiTabs-flexContainer > button > span': {
      fontFamily: 'roboto',
      fontWeight: 'bold',
    },
    '& > * > .MuiTabs-flexContainer + span': {
      backgroundColor: '#EF4444',
    },
  },
  gridContainer: {
    marginTop: 32,
  },
  card: {
    backgroundColor: '#f3f4f6',
  },
  browserTab: {
    width: '102%',
    marginLeft: '-1%',
  },
  CardContentImage: {
    padding: 0,
    height: 200,
    overflow: 'hidden',
  },
  screenshot: {
    width: '100%',
    borderLeft: '4px solid #f3f4f6',
    borderRight: '4px solid #f3f4f6',
  },
  CardContentTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    color: '#1F2937',
    backgroundColor: '#f3f4f6',
    '&:last-child': {
      padding: 10,
    },
    '& > *': {
      fontFamily: 'roboto',
      fontWeight: 'bold',
      fontSize: '1rem',
      textTransform: 'capitalize',
    },
  },
  previewIcons: {
    '& a': {
      marginLeft: 8,
      color: '#1F2937',
      transition: '0.5s',
      '&:hover': {
        color: '#EF4444',
      },
    },
  },
});

const Works = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const htmlCssProjects = projects.filter((project) => project.category === 'HTML/CSS');
  const javaScriptProjects = projects.filter((project) => project.category === 'JavaScript');
  const bootstrapProjects = projects.filter((project) => project.category === 'Bootstrap');
  const reactProjects = projects.filter((project) => project.category === 'React');

  const createProjectCard = (project, index) => (
    <Grid key={index} item xs={12} sm={6} lg={4}>
      <Card className={classes.card} variant='outlined'>
        <img className={classes.browserTab} src={browserTab} alt='' />
        <CardContent className={classes.CardContentImage}>
          <motion.img className={classes.screenshot} src={project.screenshot} whileHover={{ translateY: -400, transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' } }} alt='' />
        </CardContent>
        <CardContent className={classes.CardContentTitle}>
          <Typography variant='h5'>{project.title}</Typography>
          <Box className={classes.previewIcons}>
            <a target='_blank' href={project.sourceCode}>
              <Code></Code>
            </a>
            <a target='_blank' href={project.liveDemo}>
              <Visibility></Visibility>
            </a>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <div className={classes.works}>
      <Container maxWidth='md'>
        <Typography variant='h2' className={classes.title}>
          Works
        </Typography>
        <Container maxWidth='md'>
          <Paper variant='outlined'>
            <Tabs
              className={classes.tabs}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              variant='scrollable'
              scrollButtons='auto'
            >
              <Tab label='All' />
              <Tab label='HTML / CSS' />
              <Tab label='JavaScript' />
              <Tab label='Bootstrap' />
              <Tab label='React' />
            </Tabs>
          </Paper>
          <Grid className={classes.gridContainer} container spacing={4}>
            {value === 0 && projects.map(createProjectCard)}
            {value === 1 && htmlCssProjects.map(createProjectCard)}
            {value === 2 && javaScriptProjects.map(createProjectCard)}
            {value === 3 && bootstrapProjects.map(createProjectCard)}
            {value === 4 && reactProjects.map(createProjectCard)}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Works;
