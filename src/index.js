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
    //gets all genres from db and sends to reducer
    try{
        const genres = yield axios.get('/api/genre');
        console.log('genres from DB:', genres);
        yield put ({type:'SET_GENRES', payload: genres.data})
    } catch (error) {
        console.error('error in genre GET', error)
    }
}

// adds a movie to DB
function* addMovie (action) {
    let newMovie = action.payload
    try {
        yield axios.post(`/api/movie`, newMovie)
    } catch (error) {
        console.error('Error adding newMovie:', error, newMovie );
        
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Stores the presently selected movie for access by the deatils page
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



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie,
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
