"use client";
import { Button, Checkbox, Flex, Form, Input, InputNumber } from "antd";
import { useMovieSearchContext } from "@/components/movieSearchProvider";
import { ShowType } from "../movieTable";

interface FormValues {
  title: string;
  year: number;
  type: ShowType;
}

const showTypes = [
  { label: "Movie", value: "movie" },
  { label: "Series", value: "series" },
];

export default function SearchAndFilter() {
  const [form] = Form.useForm();
  const {
    searchQuery,
    setSearchQuery,
    setShowType,
    setReleaseYear,
    tableParams,
    setTableParams,
  } = useMovieSearchContext();

  const onFinish = (values: FormValues) => {
    setSearchQuery(values.title);
    setReleaseYear(values.year);
    setShowType(values.type);
    setTableParams({
      pagination: {
        ...tableParams.pagination,
        current: 1,
      },
    });
  };

  const handleCheckboxChange = (checkedValues: string[]) => {
    const newValue = checkedValues.length === 1 ? checkedValues[0] : null;
    form.setFieldsValue({ type: newValue });
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      initialValues={{ title: searchQuery }}
    >
      <Flex gap={"4rem"}>
        <Form.Item name="title" label="Movie Name">
          <Input
            placeholder="Search for movies"
            style={{ width: "max-content" }}
          />
        </Form.Item>
        <Form.Item name="year" label="Release Year">
          <InputNumber
            placeholder="Search for release year"
            style={{ width: "max-content" }}
            min={1900}
            max={new Date().getFullYear()}
            controls={false}
          />
        </Form.Item>
        <Form.Item name="type" label="Type of Show">
          <Checkbox.Group
            options={showTypes}
            onChange={handleCheckboxChange}
            style={{ width: "max-content" }}
          />
        </Form.Item>
      </Flex>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
}
