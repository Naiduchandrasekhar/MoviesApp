import React from 'react'
import '../Components/MoviesCard.css'

const MoviesCard = ({movie}) => {
  return (
    <div className='card'>
        <img className='images' src={movie.Poster} alt={movie.Title} height='150px' width='150px' />
        <p className='movieTitle'>{movie.Title}</p>
        <p className='movieYear'>{movie.Year}</p>
    </div>
  )
}

export default MoviesCard