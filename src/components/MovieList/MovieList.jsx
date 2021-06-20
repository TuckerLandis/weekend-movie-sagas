import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from '../MovieItem/MovieItem';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                       <MovieCard key={movie.id} movie={movie} />
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;