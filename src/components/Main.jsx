import movies from "../data/movies.json";
import '../Main.css'

function Main() {
  return (
    <div>
      <h1>This is the Main Component</h1>
      {movies.map((movieObj) => {
        return (
          <div className="Main">
            <h2 className="card">
              {movieObj.title} ({movieObj.year})
            </h2>
            <h3>Rating: {movieObj.rating}</h3>
            {movieObj.genres.map((genre) => {
              return <p>Genres: {genre}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Main;
