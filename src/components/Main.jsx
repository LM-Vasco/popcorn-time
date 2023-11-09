import movies from "../data/movies.json";
import Movie from "./Movie";
import { useState } from "react";
import "../Main.css";

function Main() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((elm) => elm.id !== movieId);
        setMoviesToDisplay(newList);
    };

    let message = "";

    moviesToDisplay.length
        ? (message = <h1>Number of movies: {moviesToDisplay.length}</h1>)
        : (message = <h1>Sorry, no movies to display</h1>);

    return (
        <>
            {message}

            {moviesToDisplay.map(function (movieObj) {
                return <Movie key={movieObj.id} movieDetails={movieObj} title="hello" callbackToDelete={deleteMovie} />;
            })}
        </>
    );
}

export default Main;
