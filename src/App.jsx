import { useState } from "react";
import movies from "./data/movies.json";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((movieDetails) => {
            return movieDetails.id !== movieId;
        });
        setMoviesToDisplay(newList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // create an object with the details of the new movie to add
        const newMovie = {
            title: title,
            rating: rating,
            imgURL: imageUrl
        };

        // update the list of movies
        const newList = [newMovie, ...moviesToDisplay];
        setMoviesToDisplay(newList);

        // clear the form
        setTitle("");
        setRating("");
        setImageUrl("");
    };

    return (
        <>
            <Header numberOfMovies={moviesToDisplay.length} />

            <section className="box">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />

                    <input
                        type="number"
                        name="rating"
                        placeholder="enter the rating"
                        value={rating}
                        onChange={(e) => {
                            setRating(e.target.value);
                        }}
                    />

                    <input
                        type="url"
                        name="imageUrl"
                        placeholder="enter the image URL"
                        value={imageUrl}
                        onChange={(e) => {
                            setImageUrl(e.target.value);
                        }}
                    />

                    <button>Create movie</button>
                </form>
            </section>

            <Main moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />
            <Footer />
        </>
    );
}

export default App;
