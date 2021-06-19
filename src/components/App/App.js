import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieForm from '../MovieForm/MovieForm';
import Details from '../Details/Details'
import Nav from '../Nav/Nav'

function App() {
  return (
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
  );
}

export default App;
