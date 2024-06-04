import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Product",
    dataIndex: "product",
    sorter: (a, b) => a.product.length - b.product.length,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price.length - b.price.length,
  },
  {
    title: "Stock",
    dataIndex: "stock",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productState = useSelector((state) => state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      product: productState[i].title,
      price: `Rp. ${productState[i].price}`,
      stock: `${productState[i].stock}x`,
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
      <h3 className="mb-4">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ProductList;
