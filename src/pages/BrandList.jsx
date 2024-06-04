import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BrandList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const brandState = useSelector((state) => state.brand.brands);
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i + 1,
      brand: brandState[i].title,
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
      <h3 className="mb-4">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BrandList;
