function MovieItem ({movie}) {
    

    // abilities to switch to details view. this will be a route to the details page that shows the, uh, details. 

    // this component needs
    // [ ] on click, send the present movie data object to a reducer named "selected" 
    // [ ] on click, use history push to details page
    // [ ] a display card
    // 

    return (
        <div key={movie.id} >
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title}/>
    </div>
    )
}

export default MovieItem