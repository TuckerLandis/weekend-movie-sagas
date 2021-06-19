import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieForm from '../MovieForm/MovieForm';
import Details from '../Details/Details'
import NavBar from '../NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <Details />
         </Route>
        <Route path="/form">
          <MovieForm />
        </Route>

      <NavBar />
      </Router>
    </div>
  );
}

export default App;
