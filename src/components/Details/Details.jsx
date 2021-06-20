import { useDispatch, useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import {HashRouter as Router, Route, useHistory, useParams} from 'react-router-dom';

import './details.css'
import { useEffect } from "react";


function Details () {
    const movie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.selectedGenres);
    const history = useHistory()
    const dispatch = useDispatch()
    const params = useParams();

    // queries DB for movie info at slected ID from URL params, data persists refresh

    

    useEffect(()=> {
        dispatch({
            type: 'SELECT_MOVIE_ID',
            payload: Number(params.id)
        });
    }, [])

    useEffect(()=> {
        dispatch({
            type: 'SELECT_GENRES',
            payload: Number(params.id)
        });
    }, [])

    const handleBack = () => {
        history.push('/')
    }

    console.log(movie);
    return (
        <div>
            <div className="title-div">
            <Button 
            variant="contained" 
            color="primary" 
            onClick={handleBack}
            >Back to List
            </Button>
            <h1 id="details-title">{movie.title}</h1>
            <div>
            <img src={movie.poster} alt={movie.title} />
           {genres.map(item => (
               <p key={item.id}>{item.name}</p>
           ))}
            </div>
            </div>
            
            <div className="details-desc">
            <p>{movie.description}</p>
            </div>
            
            
        </div>
    )
}

export default Details