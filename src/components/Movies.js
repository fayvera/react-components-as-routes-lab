import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
       {movies.map((movie, index) => (
        <div key={index}>
          <h3>Title: {movie.title}</h3>
          Time: {movie.time} <br></br>
          Genres: {movie.genres}<br></br>
          Metascore: {movie.metascore}
        </div>
       ))}
    </div>
  );
};

export default Movies;
