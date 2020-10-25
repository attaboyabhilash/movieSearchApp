import React, { useState, useContext } from 'react'
import { FiSearch } from "react-icons/fi";
import MovieCard from './MovieCard'
import { MovieContext } from '../contexts/MovieContext'

const Search = (props) => {
    const [query, setQuery] = useState("")
    const { movies, setMovies } = useContext(MovieContext)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d39b7df4f1b76fb7df1d1abddbe3ada8&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const response = await fetch(url)
            const data = await response.json()
            setMovies(data.results)
        }catch(err){
            console.error(err)
        }
        setQuery("")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="searchForm">
                <input type="text" className="input" value={query} name="query" placeholder="i.e. Jurassic Park..." onChange={handleChange} required />
                <input type="submit" className="button" value=""/>
                <FiSearch className="searchIcon" />
            </form>
            <div className="card-list">
                {movies && movies.filter(movie => movie.poster_path).map(movie => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
            </div>
        </>
    )
}

export default Search
