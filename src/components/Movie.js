import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({  title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link to={{
                pathname: '/movie-detail',
                // onClick: saveStateValues(  title, year, summary, poster, genres ),
            }}>
                <img src={poster} alt={title} title={title} />    
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className='movie_genres'>
                        {genres.map((genre, index) => {
                            return <li key={index} className='movie_genre'>{genre}</li>;
                        })}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 180)}</p>
                </div>
            </Link>
        </div>   
    );
} 

/*
const saveStateValues = ( title, year, summary, poster, genres ) => {
    localStorage.setItem( 'title', title );
    localStorage.setItem( 'year', year );
    localStorage.setItem( 'summary', summary );
    localStorage.setItem( 'poster', poster );
    localStorage.setItem( 'genres', genres );
};
*/

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;