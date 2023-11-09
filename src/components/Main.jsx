import Movie from "./Movie";

function Main(props){

    return (
        <>

            {props.moviesArr.map(function(movieObj){
                return (
                    <Movie 
                        key={movieObj.id}
                        movieDetails={movieObj}
                        callbackToDelete={props.callbackToDelete}
                        />
                )
            })}

        </>
    );
}

export default Main;