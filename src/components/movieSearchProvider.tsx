"use client";
import { TablePaginationConfig } from "antd";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { ShowType } from "./movieTable";

interface TableParams {
  pagination?: TablePaginationConfig;
}

interface SearchProviderProps {
  children: ReactNode;
}

interface ContextValue {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  releaseYear?: number;
  setReleaseYear: (year: number) => void;
  showType?: ShowType;
  setShowType: (type: ShowType) => void;
  tableParams: TableParams;
  setTableParams: (params: TableParams) => void;
}

const MovieSearchContext = createContext<ContextValue | undefined>(undefined);

export const useMovieSearchContext = () => {
  const context = useContext(MovieSearchContext);
  if (!context) {
    throw new Error(
      "useMovieSearchContext must be used within a MovieSearchProvider"
    );
  }
  return context;
};

function MovieSearchProvider({ children }: SearchProviderProps) {
  const [searchQuery, setSearchQuery] = useState("Pokemon");
  const [releaseYear, setReleaseYear] = useState<number>();
  const [showType, setShowType] = useState<ShowType>();
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      showSizeChanger: false,
    },
  });

  const contextValue = {
    searchQuery,
    setSearchQuery,
    releaseYear,
    setReleaseYear,
    showType,
    setShowType,
    tableParams,
    setTableParams,
  };

  return (
    <MovieSearchContext.Provider value={contextValue}>
      {children}
    </MovieSearchContext.Provider>
  );
}

export { MovieSearchProvider };
