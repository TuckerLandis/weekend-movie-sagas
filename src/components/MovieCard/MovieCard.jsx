import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import shadows from '@material-ui/system'
import {HashRouter as Router, Route, useHistory} from 'react-router-dom';
import { orange } from '@material-ui/core/colors';


const useStyles = makeStyles({
  root: {
    width: 345,
    padding: 40,
    margin: 30,
    
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
        <Button color="orange" variant="contained" >
          Details
        </Button>
        
      </CardActions>
    </Card>
  );
}
    
export default MovieCard