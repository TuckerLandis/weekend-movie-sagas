import { useSelector } from "react-redux"


function Details () {
    const movie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.selectedGenres)
    return (
        <div>
            <h2>{movie.title}</h2>
            <Button 
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


// ### Details Page

// This should show all details **including ALL genres** for the selected movie. You will need to store this data in redux!

//  > Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?

// - TODO: The details page should have a `Back to List` button, which should bring the user to the Home/List Page

// > Base functionality does not require the movie details to load correctly after refresh of the browser.