import React, { useState } from "react";
import "./App.css";
import { MoviesData } from "./MoviesData";
import MoviesList from "./component/MovieList/MovieList";
import Header from "./component/Header/Header";
import background from "./back.jpg";

function App() {
  const [movies, setMovies] = useState(MoviesData);
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const AddNewMovie = (x) => {
    setMovies([...movies, x]);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Header
        setSearchName={setSearchName}
        setSearchRate={setSearchRate}
        searchRate={searchRate}
      />
      <MoviesList
        movies={
          searchName || searchRate
            ? movies.filter(
                (el) =>
                  el.name
                    .toLowerCase()
                    .includes(searchName.toLowerCase().trim()) &&
                  el.rating >= searchRate
              )
            : movies
        }
        AddNewMovie={AddNewMovie}
      />
    </div>
  );
}

export default App;
