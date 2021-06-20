import { useSelector } from "react-redux"
import Button from '@material-ui/core/Button';
import {HashRouter as Router, Route, useHistory} from 'react-router-dom';
import './details.css'


function Details () {
    const movie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.selectedGenres);
    const history = useHistory()

    const handleBack = () => {
        history.push('/')
    }

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
            </div>
            
            
            <img src={movie.poster} alt={movie.title} />
            <div className="details-desc">
            <p>{movie.description}</p>
            </div>
            
            <ul>
           {genres.map(item => (
               <li>{item.name}</li>
           ))}
            </ul>
        </div>
    )
}

export default Details