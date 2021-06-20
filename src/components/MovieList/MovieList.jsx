import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieCard from '../MovieCard/MovieCard';
import './movie-list.css'

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