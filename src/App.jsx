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

    const deleteMovie = (movieTitle) => {
        const newList = moviesToDisplay.filter((movieDetails) => {
            return movieDetails.title !== movieTitle;
        });
        setMoviesToDisplay(newList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // create an object with the details of the new movie to add
        const newMovie = {
            title: title,
            rating: rating,
            imgURL: imageUrl,
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
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            placeholder="enter the title"
                            required={true}
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        Rating:
                        <input
                            type="number"
                            name="rating"
                            required={true}
                            min={1}
                            max={10}
                            placeholder="enter the rating"
                            value={rating}
                            onChange={(e) => {
                                setRating(e.target.value);
                            }}
                        />
                    </label>

                    <label>
                        Image URL:
                        <input
                            type="url"
                            name="imageUrl"
                            placeholder="enter the image URL"
                            value={imageUrl}
                            onChange={(e) => {
                                setImageUrl(e.target.value);
                            }}
                        />
                    </label>

                    <button>Create movie</button>
                </form>
            </section>

            <Main moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />
            <Footer />
        </>
    );
}

export default App;
