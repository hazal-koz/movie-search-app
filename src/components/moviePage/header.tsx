"use client";
import { Movie } from "@/app/movie/[id]/page";
import { Divider, Flex, Typography } from "antd";

const { Title, Text } = Typography;

interface MovieComponentProps {
  movie: Movie;
}

export const Header = ({ movie }: MovieComponentProps) => {
  return (
    <>
      <Title level={2}>{movie.Title}</Title>
      <Flex>
        <Text>
          {movie.Released}
          <Divider type="vertical" />
          {movie.Rated}
          <Divider type="vertical" />
          {movie.Runtime}
        </Text>
      </Flex>
    </>
  );
};
