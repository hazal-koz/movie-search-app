import { Movie } from "@/app/movie/[id]/page";
import { useEffect, useState } from "react";

const getMovieParams = (imdbId: string) => {
  const queryParams = {
    ...(process.env.apiKey && { apikey: process.env.apiKey }),
    ...(imdbId && { i: imdbId }),
  };
  return new URLSearchParams(queryParams).toString();
};

const useGetMovieById = (imdbId: string) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovies = () => {
      fetch(`http://www.omdbapi.com/?${getMovieParams(imdbId)}`)
        .then((res) => res.json())
        .then((res) => {
          setMovie(res);
        });
    };
    fetchMovies();
  }, []);
  return { movie };
};

export default useGetMovieById;
