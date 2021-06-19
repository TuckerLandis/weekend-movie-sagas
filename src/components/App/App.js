import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieForm from '../MovieForm/MovieForm';
import Details from '../Details/Details'
import Nav from '../Nav/Nav'

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme} >
    <div className="App">
      <h1>The Movies Saga!</h1>
      
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
