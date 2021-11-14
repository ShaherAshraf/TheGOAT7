import { Container, makeStyles, Typography, Grid, Card, CardContent, CardMedia } from '@material-ui/core';

// Images
import HTML from '../assets/images/skills/HTML-5.svg';
import CSS from '../assets/images/skills/CSS-3.svg';
import JavaScript from '../assets/images/skills/JavaScript.svg';
import ES6 from '../assets/images/skills/ES6.svg';
import Sass from '../assets/images/skills/Sass.svg';
import Bootstrap from '../assets/images/skills/Bootstrap.svg';
import JQuery from '../assets/images/skills/JQuery.svg';
import JSON from '../assets/images/skills/JSON.svg';
import React from '../assets/images/skills/React.svg';
import Redux from '../assets/images/skills/Redux.svg';
import MaterialUi from '../assets/images/skills/Material-ui.svg';
import Motion from '../assets/images/skills/Motion.svg';
import Npm from '../assets/images/skills/Npm.svg';
import Git from '../assets/images/skills/Git.svg';
import GitHub from '../assets/images/skills/GitHub.svg';
import Parcel from '../assets/images/skills/Parcel.avif';
import Grunt from '../assets/images/skills/Grunt.svg';
import WebPack from '../assets/images/skills/WebPack.svg';
import Jest from '../assets/images/skills/Jest.svg';
import Figma from '../assets/images/skills/Figma.svg';

// Skills
const skills = [
  { name: 'HTML-5', thumbnail: HTML },
  { name: 'CSS-3', thumbnail: CSS },
  { name: 'JavaScript', thumbnail: JavaScript },
  { name: 'ES6', thumbnail: ES6 },
  { name: 'Sass', thumbnail: Sass },
  { name: 'Bootstrap', thumbnail: Bootstrap },
  { name: 'JQuery', thumbnail: JQuery },
  { name: 'JSON', thumbnail: JSON },
  { name: 'React', thumbnail: React },
  { name: 'Redux', thumbnail: Redux },
  { name: 'MUI', thumbnail: MaterialUi },
  { name: 'Motion', thumbnail: Motion },
  { name: 'Npm', thumbnail: Npm },
  { name: 'Git', thumbnail: Git },
  { name: 'GitHub', thumbnail: GitHub },
  { name: 'Parcel', thumbnail: Parcel },
  { name: 'Grunt', thumbnail: Grunt },
  { name: 'WebPack', thumbnail: WebPack },
  { name: 'Jest', thumbnail: Jest },
  { name: 'Figma', thumbnail: Figma },
];

// Styles
const useStyles = makeStyles({
  skills: {
    width: 'calc(100% - 1rem)',
    minHeight: '100vh',
    marginRight: '1rem',
    paddingTop: 100,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 80,
  },
  card: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  cardContent: {
    width: '60%',
    padding: '16px 7px',
    '& > *': {
      color: '#7a7a7b',
      fontFamily: 'roboto',
      fontSize: '1rem',
    },
  },
  cardMedia: {
    width: '20%',
    padding: '10px 0',
  },
});

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.skills}>
      <Container maxWidth='md'>
        <Typography variant='h2' className={classes.title}>
          Skills
        </Typography>
        <Container maxWidth='md'>
          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card} variant='outlined'>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5'>{skill.name}</Typography>
                  </CardContent>
                  <CardMedia className={classes.cardMedia} component='img' image={skill.thumbnail} alt='thumbnail' />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Skills;
