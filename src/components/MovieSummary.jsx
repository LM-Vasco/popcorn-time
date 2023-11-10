import { Link } from "react-router-dom";

function MovieSummary(props){
    return(
        <section className="Movie card">

            {props.movieDetails.imgURL
                ? <img src={props.movieDetails.imgURL} />
                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            }

            <h2>{props.movieDetails.title}</h2>
            <p>Rating: {props.movieDetails.rating}</p>

            { props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}

            <p>
                <Link to={`/movies/${props.movieDetails.id}`}>More Details</Link>
            </p>

            <button
                onClick={function () {
                    props.callbackToDelete(props.movieDetails.id);
                }}>
                Delete
            </button>

        </section>
    );
}

export default MovieSummary;