import movies from "../data/movies.json";
import { useState } from "react";
import "../Main.css";

function Main() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((elm) => elm.id !== movieId);
        setMoviesToDisplay(newList);
    };

    let message = "";

    /* if(moviesToDisplay.length) {
        message = <h1>List of Movies</h1>
    }
    else {
        message = <h1>Sorry, no movies to display</h1>
    } */

    moviesToDisplay.length ? (message = <h1>List of Movies</h1>) : (message = <h1>Sorry, no movies to display</h1>);

    return (
        <div>
            {message}

            {moviesToDisplay.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="Main">
                        {movieObj.imgURL ? (
                            <img src={movieObj.imgURL} />
                        ) : (
                            <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        )}

                        <h2 className="card">
                            {movieObj.title} ({movieObj.year})
                        </h2>
                        <h3>Rating: {movieObj.rating}</h3>
                        {movieObj.rating > 8 && <p>RECOMMENDED</p>}
                        {movieObj.genres.map((genre) => {
                            return <p>Genres: {genre}</p>;
                        })}
                        
                        <button
                            onClick={() => {
                                deleteMovie(movieObj.id);
                            }}
                        >
                            Delete Movie
                        </button>
                        <br></br>
                        <br></br>
                    </div>
                );
            })}
        </div>
    );
}

export default Main;
