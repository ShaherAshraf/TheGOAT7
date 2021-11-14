import { ThemeProvider, createTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Works from './pages/Works';
import DownLoadCv from './pages/DownLoadCv';
import Contact from './pages/Contact';
import Footer from './components/Footer';

let theme = createTheme({
  root: {
    cursor: 'crosshair',
  },
  typography: {
    fontFamily: 'Arvo, serif',
    h1: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#1F2937',
    },
    secondary: {
      main: '#EF4444',
    },
  },
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  App: {
    color: '#1F2937',
    backgroundColor: '#F3F4F6',
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Header />
        <Menu />
        <div className='scroller'>
          <Home />
          <About />
          <Skills />
          <Works />
          <DownLoadCv />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
