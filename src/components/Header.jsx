import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(props){
    return (
        <header className="Header">
            <h1>Welcome to Popcorn Time!</h1>
            
            <nav>
                <NavLink to="/">Home </NavLink> | 
                <NavLink to="/about">About </NavLink>
            </nav>

            { props.numberOfMovies > 0 
                ? <h2>Number of movies: {props.numberOfMovies}</h2>
                : <h2>Sorry, no movies to display</h2>
            }
        </header>
    );
}

export default Header;