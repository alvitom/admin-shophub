import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductCategories, getProductCategories } from "../features/product-category/pcategorySlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const CategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCategories());
  }, []);

  const handleDeleteProductCategories = (id) => {
    dispatch(deleteProductCategories(id));
  };

  const productCategoryState = useSelector((state) => state.productCategory.productCategories);
  const data1 = [];
  for (let i = 0; i < productCategoryState.length; i++) {
    data1.push({
      key: i + 1,
      category: productCategoryState[i].title,
      action: (
        <div className="d-flex align-items-center gap-2">
          <a href="" className="d-flex align-items-center gap-1 btn btn-primary">
            <FaEdit />
            Edit
          </a>
          <button onClick={() => handleDeleteProductCategories(productCategoryState[i]._id)} className="d-flex align-items-center gap-1 btn btn-danger">
            <MdDelete />
            Delete
          </button>
        </div>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default CategoryList;
