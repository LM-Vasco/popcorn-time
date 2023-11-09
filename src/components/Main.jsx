import Movie from "./Movie";

function Main(props){

    return (
        <>

            {props.moviesArr.map(function(movieObj, index){
                return (
                    <Movie 
                        key={index}
                        movieDetails={movieObj}
                        callbackToDelete={props.callbackToDelete}
                        />
                )
            })}

        </>
    );
}

export default Main;