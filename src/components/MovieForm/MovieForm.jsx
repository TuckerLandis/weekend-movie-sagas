import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';



function MovieForm () {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const handleChange = () => {
        console.log(evt.target.value);
    }

    return (<div>
        <form>
            <TextField
          id="outlined-multiline-flexible"
          label="Title"
          value={title}
          onChange={handleChange}
          variant="outlined"
        />
            <TextField
          id="outlined-multiline-flexible"
          label="Poster URL"
          value={url}
          onChange={handleChange}
          variant="outlined"
        />
        <div>
            <TextareaAutosize
      rowsMax={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
    />
    </div>
    <div>
    <Button variant="outlined" color="primary">
         Primary
    </Button>
    </div>

        </form>
        </div>
    )
}

export default MovieForm



// This should show:

// - an input field (for the movie title)
// - an input field (for the movie poster image URL))
// - a textarea (for the movie description)
// - a dropdown (for the genres)

// The Add Movie page should have the buttons:

// - `Cancel` button, which should bring the user to the Home/List Page
// - `Save` button, which should save these inputs in the database and bring the user to the Home/List Page (which now has the new movie)
