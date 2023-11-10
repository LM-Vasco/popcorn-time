import MovieSummary from "./MovieSummary";

function MovieList(props){

    return (
        <>

            {props.moviesArr.map(function(movieObj, index){
                return (
                    <MovieSummary 
                        key={index}
                        movieDetails={movieObj}
                        callbackToDelete={props.callbackToDelete}
                        />
                )
            })}

        </>
    );
}

export default MovieList;