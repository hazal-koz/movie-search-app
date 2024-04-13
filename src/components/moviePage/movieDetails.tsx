"use client";
import { Flex, Typography } from "antd";
import { ReactNode } from "react";
import { StarFilled } from "@ant-design/icons";
import styles from "./moviePage.module.css";
import { Movie } from "@/app/movie/[id]/page";
import { MovieGenres } from "./movieGenres";

const { Text } = Typography;

interface MovieComponentProps {
  movie: Movie;
}

export const MovieDetails = ({ movie }: MovieComponentProps) => {
  const renderDetail = (title: string, content: ReactNode) => (
    <Flex vertical gap={8}>
      <Text className={styles.subtitle}>{title}</Text>
      <Text>{content}</Text>
    </Flex>
  );
  return (
    <>
      <Flex vertical gap={12} className={styles.movieDetails}>
        <MovieGenres movie={movie} />
        <Text>{movie.Plot}</Text>
        {renderDetail(
          "IMDb Rating",
          <Text>
            <StarFilled />
            {movie.imdbRating}
          </Text>
        )}
        {renderDetail("Director", movie.Director)}
        {renderDetail("Writer", movie.Writer)}
        {renderDetail("Actors", movie.Actors)}
        {renderDetail("Language", movie.Language)}
        {renderDetail("Country", movie.Country)}
        {renderDetail("Awards", movie.Awards)}
      </Flex>
    </>
  );
};
