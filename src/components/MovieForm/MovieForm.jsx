import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';



function MovieForm () {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [poster, setPoster] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')

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
    const addMovie = (event) => {
        event.preventDefault
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title: title,
                poster: poster,
                description: description,
                genre: genre
            }
        })
        setTitle('')
        setPoster('')
        setDescription('')
        setGenre('')
    }

    return (<div>
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
            <TextareaAutosize
      rowsMax={4}
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

            {/* GENRE MAP */}
          <option aria-label="None" value="" />
          <option value={'genre1'}>Genre1</option>
          <option value={'genre2'}>Genre2</option>
          <option value={'genre3'}>Genre3</option>
        </NativeSelect>
        
      </FormControl>
    <div>
    <Button variant="outlined" color="primary" type="submit">
         Save
    </Button>
    </div>

        </form>
        </div>
    )
}

export default MovieForm



// This should show:

// - an input field (for the movie title)
// - an input field (for the movie poster image url))
// - a textarea (for the movie description)
// - a dropdown (for the genres)

// The Add Movie page should have the buttons:

// - `Cancel` button, which should bring the user to the Home/List Page
// - `Save` button, which should save these inputs in the database and bring the user to the Home/List Page (which now has the new movie)
