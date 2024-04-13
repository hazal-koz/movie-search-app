"use client";
import { Flex, Tag } from "antd";
import { Movie } from "@/app/movie/[id]/page";

interface MovieComponentProps {
  movie: Movie;
}

export const MovieGenres = ({ movie }: MovieComponentProps) => {
  const genreList = movie.Genre.split(",");

  return (
    <Flex gap={8}>
      {genreList.map((genre, index) => (
        <Tag key={index}>{genre.trim()}</Tag>
      ))}
    </Flex>
  );
};
