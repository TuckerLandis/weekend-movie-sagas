import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {HashRouter as Router, Route, useHistory} from 'react-router-dom';

import './movie-card.css'


const useStyles = makeStyles({
  root: {
    height: 550,
    width: 345,
    padding: 40,
    
  },
  media: {
      height: 325,
  }
});



function MovieCard ({movie}) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()    

    const handleClick = () => {
        console.log('clicked movie:', movie);
        
        history.push(`/details/${movie.id}`)
    } 

    return (
        <div className="movie-card" >
 <Card 
        className={classes.root} 
        onClick={handleClick}
        key={movie.id}
        >
            
      <CardActionArea>
        <CardMedia
        className={classes.media}
          component="img"
          alt={movie.title}
          height="140"
          image={movie.poster}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}

          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
           genres
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" variant="contained" >
          Details
        </Button>
        
      </CardActions>
    </Card>
        </div>
       
  );
}
    
export default MovieCard