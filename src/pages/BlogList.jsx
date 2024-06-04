import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blog/blogSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Blog",
    dataIndex: "blog",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const { blogs } = useSelector((state) => state.blog);
  const data1 = [];
  for (let i = 0; i < blogs.length; i++) {
    data1.push({
      key: i + 1,
      blog: blogs[i].title,
      category: blogs[i].category,
      action: (
        <div className="d-flex align-items-center gap-2">
          <a href="" className="d-flex align-items-center gap-1 btn btn-primary">
            <FaEdit />
            Edit
          </a>
          <a href="" className="d-flex align-items-center gap-1 btn btn-danger">
            <MdDelete />
            Delete
          </a>
        </div>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4">Blog List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BlogList;
