import { useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import {HashRouter as Router, Route, useHistory} from 'react-router-dom';


function Details () {
    const movie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.selectedGenres);
    const history = useHistory()

    const handleBack = () => {
        history.push('/')
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <Button 
            variant="contained" 
            color="primary" 
            onClick={handleBack}
            >Back to List
            </Button>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
            <ul>
           {genres.map(item => (
               <li>{item.name}</li>
           ))}
            </ul>
        </div>
    )
}

export default Details