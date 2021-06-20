import { useDispatch, useSelector } from 'react-redux';
import {HashRouter as Router, Route, useHistory} from 'react-router-dom';
function MovieItem ({movie}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        console.log('clicked movie:', movie);
        dispatch({
            type: 'SELECT_MOVIE',
            payload: movie
        })
        dispatch({
            type: 'SELECT_GENRES',
            payload: movie.id
        })
        history.push('/details')
    }  


    return (
        <div key={movie.id} >
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title} onClick={handleClick}/>
    </div>
    )
}

export default MovieItem
