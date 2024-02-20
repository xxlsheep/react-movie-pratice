import { useState, useEffect } from "react";
import Movie from "../components/Movie";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
  //   .then((response) => response.json())
  //   .then((json) => setMovies(json.data.movies))
  //   setLoading(false)
  // },[])

  // const getMovies = async() => {
  //   const response =
  //   await(
  //     fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
  //     )
  //   );
  //   const json = await (response.json());
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // }

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
