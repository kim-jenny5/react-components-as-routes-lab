import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(({ title, time, genres }, i) => (
        <div key={i}>
          <h2>Title: {title}</h2>
          <p>Time: {time}</p>
          <ul>
            {genres.map((genre, i) => (
              <li key={i}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
