"use client";
import { Table, TablePaginationConfig } from "antd";
import type { TableProps } from "antd";
import Link from "next/link";
import ImageWithFallback from "../imageWithFallback";
import { useMovieSearchContext } from "@/components/movieSearchProvider";

export type ShowType = "movie" | "series" | undefined;

export interface MovieTableItemType {
  Key: string;
  Title: string;
  Year: number;
  imdbID: string;
  Type: ShowType;
  Poster: string;
}

const MovieTitleLink: React.FC<{ title: string; imdbID: string }> = ({
  title,
  imdbID,
}) => {
  return <Link href={`/movie/${imdbID}`}>{title}</Link>;
};

const columns: TableProps<MovieTableItemType>["columns"] = [
  {
    title: "IMDB ID",
    dataIndex: "imdbID",
    key: "imdbID",
    width: "10%",
  },
  {
    title: "Poster",
    dataIndex: "Poster",
    key: "poster",
    render: (poster: string, record: MovieTableItemType) => (
      <ImageWithFallback
        src={poster}
        alt={record.Title}
        width={60}
        height={90}
      />
    ),
    width: "10%",
  },
  {
    title: "Title",
    dataIndex: "Title",
    key: "title",
    render: (title: string, record: MovieTableItemType) => (
      <MovieTitleLink title={title} imdbID={record.imdbID} />
    ),
    width: "25%",
  },
  {
    title: "Year",
    dataIndex: "Year",
    key: "year",
    width: "10%",
  },
  {
    title: "Type",
    dataIndex: "Type",
    key: "type",
    width: "10%",
  },
];

interface MovieTableProps {
  dataSource: MovieTableItemType[];
  loading: boolean;
}

export const MovieTable = ({ dataSource, loading }: MovieTableProps) => {
  const { tableParams, setTableParams } = useMovieSearchContext();

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
  };
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};
