import { useState } from "react";

function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // create an object with the details of the new movie to add
        const newMovie = {
            title: title,
            rating: rating
        }

        // update the list of movies (invoking a function in the parent component)
        props.callbackToAddMovie(newMovie);

        // clear the form
        setTitle("");
        setRating("");
    }

    return (
        <section className='AddMovie box'>

            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="enter the title"
                        required={true}
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
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
                        value={rating}
                        onChange={(e) => { setRating(e.target.value) }}
                    />
                </label>

                <button>Create movie</button>
            </form>

        </section>

    );
}

export default AddMovie;