import { Link, useParams } from "react-router-dom";

function MovieDetails(props){

    const {movieId} =  useParams();  // useParams returns an object
    
    // note: url params are always strings
    // console.log(typeof movieId);


    const movieDetails = props.moviesArr.find((movie) => {
        return movie.id == movieId;
    });


    return(
        <>
            <h1>{movieDetails.title}</h1>

            {movieDetails.imgURL && <img src={movieDetails.imgURL} alt={movieDetails.title} />}
            {movieDetails.rating && <p>Rating: {movieDetails.rating}</p>}
            {movieDetails.year && <p>Year: {movieDetails.year}</p>}
            {movieDetails.genres && movieDetails.genres.map( (genreStr, i) => {
                return <span key={i} className="badge">{genreStr}</span>
            })}


            <p>
                <Link to="/">Home</Link>
            </p>

        </>
    )
}

export default MovieDetails;