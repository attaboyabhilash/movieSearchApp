import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../contexts/MovieContext'

const Details = (props) => {
    const id = props.match.params.id
    const { movies } = useContext(MovieContext)
    return (
        <div className="card-details">
            {movies.filter(movie => String(movie.id) === String(id)).map(movie => (
                <div key={movie.id} className="details">
                    <div className="left">
                        <img 
                            className="card-images" 
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                            alt={`${movie.title} poster`} 
                        />
                    </div>
                    <div className="right">
                        <h2>{movie.title}</h2>
                        <small>Release Date: {movie.release_date}</small><br/>
                        <small>Rating: {movie.vote_average}</small>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            ))}
            <div className="card-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

export default Details
