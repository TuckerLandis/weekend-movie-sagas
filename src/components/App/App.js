import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieForm from '../MovieForm/MovieForm';
import Details from '../Details/Details'
import Nav from '../Nav/Nav'
import { CssBaseline } from '@material-ui/core';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from '../Header/Header';
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#212121',
    },
  },
  
});



function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline /> 
    <div className="App">
      <Header />
      
      <Router>      
      <Nav />  
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <Details />
         </Route>
        <Route path="/form">
          <MovieForm />
        </Route>

      
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
