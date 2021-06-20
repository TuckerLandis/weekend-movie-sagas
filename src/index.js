import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('ADD_MOVIE', addMovie)
    yield takeEvery('FETCH_GENRES', fetchGenres)
    yield takeEvery('SELECT_GENRES', selectGenres)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    } 
}

function* fetchGenres () {
    //gets all genres from db and sends to reducer -
    // this is linked to the map in the drop down when selecting genre when adding a movie
    try{
        const genres = yield axios.get('/api/genre');
        console.log('genres from DB:', genres);
        yield put ({type:'SET_GENRES', payload: genres.data})
    } catch (error) {
        console.error('error in genre GET', error)
    }
}

// adds a movie to DB, this information is passed over dispatch from the movie form
// component on submit. nothing special with variable declaration here, just for readibility, 
// newMovie is an object structured thusly:


function* addMovie (action) {
    let newMovie = action.payload // 
    try {
        yield axios.post(`/api/movie`, newMovie)
    } catch (error) {
        console.error('Error adding newMovie:', error, newMovie );
        
    }
}

function* selectGenres (action) {
    let id = action.payload
    try {
      const genreReturn = yield axios.get(`/api/genre/select/${id}`)
      yield put ({ type: 'SET_SELECTED_GENRE', payload: genreReturn.data})
    } catch (error) {
        console.log('error getting selected genre', error);
        
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// -----------------Reducers------------------- //

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres, an array of rows from genre.router
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Stores the presently selected movie for access by the deatils page
// this is linked to detail page useEffect function 
const selectedMovie = (state = [], action) => {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return action.payload;
        case 'CLEAR_SELECTION':
            return []
        default: 
            return state;
    }
}
// holds the currently selected movie's genre's to display as mapped line items
// 
const selectedGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_GENRE':
            return action.payload;
            default: 
            return state;
    }
}



// Redux Store, reducers as follows
// movies: holds return from DB, an array of movies with 
// genres: holds return from genre router get, as an array of genre's with id's
// selectedMovie: holds an object of selected movie from a details dispatch
// selectedGenres: holds a return from a get based on 
// movie ID for populating details page
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie,
        selectedGenres
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
