import movies from "../data/movies.json";
import { useState } from "react";
import "../Main.css";

function Main() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((elm) => elm.id !== movieId);
        setMoviesToDisplay(newList)
    };

    return (
        <div>
            <h1>This is the Main Component</h1>

            {moviesToDisplay.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="Main">
                        <h2 className="card">
                            {movieObj.title} ({movieObj.year})
                        </h2>
                        <h3>Rating: {movieObj.rating}</h3>
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
                    </div>
                );
            })}
        </div>
    );
}

export default Main;
