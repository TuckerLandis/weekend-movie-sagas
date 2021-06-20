import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {HashRouter as Router, Route, useHistory} from 'react-router-dom';

import './movieform.css'

function MovieForm () {
    const dispatch = useDispatch()
    const history = useHistory()
    const genres = useSelector(store => store.genres )
    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    // handle change functions for inputs *
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleChangePoster = (event) => {
        setPoster(event.target.value)
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleChangeGenre = (event) => {
        setGenre(event.target.value)
    }
    const handleCancel = () => {
        history.push('/')
    }
    const addMovie = (event) => {
        event.preventDefault
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description: description,
                genre_id: genre
            }
        })
        setTitle('')
        setPoster('')
        setDescription('')
        setGenre('')
    }

    return (
    
        // required inputs for 
        // Title
    <div className="form-container">
        <form onSubmit={addMovie}>
            <TextField
          id="outlined-multiline-flexible"
          required
          label="Title"
          value={title}
          onChange={handleChangeTitle}
          variant="outlined"
        /> 
        {/* // poster URL | 120 char limit */}
            <TextField
          id="outlined-multiline-flexible"
          required
          label="Poster"
          value={poster}
          onChange={handleChangePoster}
          variant="outlined"
        />
        {/* // description, max 100 rows, no char limit */}
        <div className= "desc-div">
            <TextField
            required
      rows={4}
      rowsMax={100}
      multiline
      style = {{width: 420}}
      placeholder="Description..."
      value={description}
      onChange={handleChangeDescription}
    />
    </div>
    
    {/* // drop down select of all genres, based on DB and with an associated ID */}
        <div className="select-div">
    <FormControl >
        <InputLabel htmlFor="Set-Genre">Genre</InputLabel>
        <NativeSelect
        required
          value={genre}
          onChange={handleChangeGenre}
          
        >
            <option value="" />
            {
                // loops over the response from genre.router and displays all genres
                genres.map(
                    item => {
                        return (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    }
                )
            }
        </NativeSelect>
      </FormControl>
      </div>
      {/* brings the user back to movielist */}
    <div className="button-div">
    <Button className="form-button" variant="contained" color="secondary" onClick={handleCancel}>
         Cancel
    </Button>
    {/* sends the above 'addMovie' dispatch to index */}
    <Button variant="contained" color="primary" type="submit">
         Save
    </Button>
    </div>

        </form>
        </div>
    )
}

export default MovieForm

