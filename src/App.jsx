import { useState } from 'react';
import movies from "./data/movies.json";
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie';

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const addNewMovie = (newMovie) => {
    // find out id for the movie that we want to add
    const movieIds = moviesToDisplay.map(function (elm) {
      return elm.id;
    });
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    // prepare an object with the details of the new movie (inc. the id)
    const movieDetails = {
      ...newMovie,
      id: nextId
    }

    const newList = [movieDetails, ...moviesToDisplay];
    setMoviesToDisplay(newList);
  }

  
  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movieDetails) => {
      return movieDetails.id !== movieId;
    });
    setMoviesToDisplay(newList);
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <AddMovie callbackToAddMovie={addNewMovie} />
      <MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie}  />
      <Footer />
    </>
  )
}

export default App
