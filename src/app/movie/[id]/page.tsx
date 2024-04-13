"use client";
import { Flex } from "antd";
import ImageWithFallback from "@/components/imageWithFallback";
import styles from "./page.module.css";
import { Header } from "@/components/moviePage/header";
import { MovieDetails } from "@/components/moviePage/movieDetails";
import useGetMovieById from "@/hooks/useGetMovieById";

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
}

export default function Page({ params }: { params: { id: string } }) {
  const { movie } = useGetMovieById(params.id);

  return (
    <>
      {movie && (
        <Flex vertical gap={8} className={styles.layout}>
          <Header movie={movie} />
          <Flex>
            <ImageWithFallback
              src={movie.Poster}
              alt={movie.Title}
              width={300}
              height={450}
            />
            <MovieDetails movie={movie} />
          </Flex>
        </Flex>
      )}
    </>
  );
}
