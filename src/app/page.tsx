"use client";
import styles from "./page.module.css";
import { MovieTable } from "@/components/movieTable";
import SearchAndFilter from "@/components/searchAndFilter";

import useSearchMovies from "@/hooks/useSearchMovies";
import { Flex, Typography } from "antd";

export default function Home() {
  const { movies, loading } = useSearchMovies();
  return (
    <main className={styles.main}>
        <Typography.Title level={2}>Movie Search App</Typography.Title>
        <SearchAndFilter />
        <MovieTable dataSource={movies} loading={loading} />
    </main>
  );
}
