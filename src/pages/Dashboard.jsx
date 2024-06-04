import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { Column } from "@ant-design/plots";
import { Table } from "antd";

const data = [
  { month: "Januari", value: 1078 },
  { month: "Februari", value: 1216 },
  { month: "Maret", value: 758 },
  { month: "April", value: 623 },
  { month: "Mei", value: 319 },
  { month: "Juni", value: 422 },
  { month: "Juli", value: -4 },
  { month: "Agustus", value: -217 },
  { month: "September", value: -358 },
  { month: "Oktober", value: 1513 },
  { month: "November", value: 1388 },
  { month: "Desember", value: 597 },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
  const config = {
    data,
    xField: "month",
    yField: "value",
    scale: {
      y: {
        domainMax: 2000,
        domainMin: -1000,
      },
    },
    label: {
      text: (d) => `${d.value / 100}%`,
      textBaseline: "bottom",
    },
    style: {
      radiusTopLeft: 0,
      radiusTopRight: 0,
      fill: "#ffd333",
    },
  };
  return (
    <div className="dashboard-wrapper">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between border-0">
              <h5 className="mb-0">Total sells</h5>
              <SlOptionsVertical />
            </div>
            <div className="card-content d-flex align-items-center justify-content-between m-3">
              <h3 className="mb-0">$3799.00</h3>
              <div className="text-end">
                <div className="d-flex align-items-center justify-content-end gap-1 increase">
                  <GoArrowUpRight />
                  <p className="mb-0">34.7%</p>
                </div>
                <p className="mb-0">Compared to April 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between border-0">
              <h5 className="mb-0">Total sells</h5>
              <SlOptionsVertical />
            </div>
            <div className="card-content d-flex align-items-center justify-content-between m-3">
              <h3 className="mb-0">$3799.00</h3>
              <div className="text-end">
                <div className="d-flex align-items-center justify-content-end gap-1 decrease">
                  <GoArrowDownRight />
                  <p className="mb-0">34.7%</p>
                </div>
                <p className="mb-0">Compared to April 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between border-0">
              <h5 className="mb-0">Total sells</h5>
              <SlOptionsVertical />
            </div>
            <div className="card-content d-flex align-items-center justify-content-between m-3">
              <h3 className="mb-0">$3799.00</h3>
              <div className="text-end">
                <div className="d-flex align-items-center justify-content-end gap-1 increase">
                  <GoArrowUpRight />
                  <p className="mb-0">34.7%</p>
                </div>
                <p className="mb-0">Compared to April 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
      <div className="mt-4">
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="mb-4">Recent Activity</h3>
              <SlOptionsVertical />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="mb-4">Recent Reviews</h3>
              <SlOptionsVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
