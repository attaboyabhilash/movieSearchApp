import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    const { movie } = props
    return (
        <Link to={`/details/${movie.id}`}>
            <div className="card">
                <img 
                    className="card-image" 
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                    alt={`${movie.title} poster`} 
                />
                <div className="card-content">
                    <h3 className="card-title">{movie.title}</h3>
                    <p><small>Release Date: {movie.release_date}</small></p>
                    <p><small>Rating: {movie.vote_average}</small></p>
                </div>
                <div className="card-footer">
                    <span>Read More...</span>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
