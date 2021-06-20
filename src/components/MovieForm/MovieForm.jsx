import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

    // handle change functions for inputs`
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

    return (<div className="form-container">
        <form onSubmit={addMovie}>
            <TextField
          id="outlined-multiline-flexible"
          label="Title"
          value={title}
          onChange={handleChangeTitle}
          variant="outlined"
        />
            <TextField
          id="outlined-multiline-flexible"
          label="Poster"
          value={poster}
          onChange={handleChangePoster}
          variant="outlined"
        />
        <div>
            <TextField
      rows={4}
      rowsMax={60}
      multiline
      aria-label="maximum height"
      placeholder="Description..."
      value={description}
      onChange={handleChangeDescription}
    />
    </div>
    <FormControl className="">
        <InputLabel htmlFor="Set-Genre">Genre</InputLabel>
        <NativeSelect
          value={genre}
          onChange={handleChangeGenre}
          
        >
            <option aria-label="None" value="" />
            {
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
    <div>
    <Button variant="contained" color="secondary" onClick={handleCancel}>
         Cancel
    </Button>
    <Button variant="contained" color="primary" type="submit">
         Save
    </Button>
    </div>

        </form>
        </div>
    )
}

export default MovieForm

