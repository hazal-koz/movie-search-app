"use client";
import { useEffect, useState } from "react";
import { TablePaginationConfig } from "antd";
import { MovieTableItemType, ShowType } from "@/components/movieTable";
import { useMovieSearchContext } from "@/components/movieSearchProvider";

interface TableParams {
  pagination?: TablePaginationConfig;
}

const getMovieSearchParams = (
  params: TableParams,
  searchQuery: string,
  releaseYear: number | undefined,
  showType: ShowType
): string => {
  const queryParams = {
    ...(process.env.apiKey && { apikey: process.env.apiKey }),
    ...(params.pagination && { page: String(params.pagination.current) }),
    ...(searchQuery && { s: searchQuery }),
    ...(releaseYear && { y: releaseYear.toString() }),
    ...(showType && { type: showType }),
  };
  return new URLSearchParams(queryParams).toString();
};

const useSearchMovies = () => {
  const { searchQuery, releaseYear, tableParams, showType, setTableParams } =
    useMovieSearchContext();

  const [movies, setMovies] = useState<MovieTableItemType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = () => {
      setLoading(true);
      fetch(
        `http://www.omdbapi.com/?${getMovieSearchParams(
          tableParams,
          searchQuery,
          releaseYear,
          showType
        )}`
      )
        .then((res) => res.json())
        .then(({ Search, totalResults }) => {
          setMovies(Search);
          setLoading(false);
          setTableParams({
            pagination: {
              ...tableParams.pagination,
              total: totalResults,
            },
          });
        });
    };

    if (searchQuery) fetchMovies();
  }, [JSON.stringify(tableParams), searchQuery, releaseYear, showType]);

  return { movies, loading };
};

export default useSearchMovies;
