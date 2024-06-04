import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaRegUser, FaClipboardList, FaBloggerB } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosAdd, IoIosNotifications } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src="/images/brand.png" alt="Shophub" className="img-fluid" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "sign-out") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <RxDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <FaRegUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <FaCartShopping className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "add-product",
                  icon: <IoIosAdd className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <CiBoxList className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "add-brand",
                  icon: <IoIosAdd className="fs-4" />,
                  label: "Add Brand",
                },
                {
                  key: "brand-list",
                  icon: <CiBoxList className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "add-category",
                  icon: <IoIosAdd className="fs-4" />,
                  label: "Add Category",
                },
                {
                  key: "category-list",
                  icon: <CiBoxList className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "add-color",
                  icon: <IoIosAdd className="fs-4" />,
                  label: "Add Color",
                },
                {
                  key: "color-list",
                  icon: <CiBoxList className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <IoIosAdd className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <CiBoxList className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "add-blog-category",
                  icon: <IoIosAdd className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <CiBoxList className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center me-5">
            <div className="position-relative">
              <IoIosNotifications className="fs-3" />
              <span className="badge indicator-notif position-absolute">1</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div className="admin-image">
                <img src="/images/Shophub-icon.png" alt="" className="img-fluid" />
              </div>
              <div className="admin-details d-flex flex-column gap-1">
                <p className="name">{user.firstname + " " + user.lastname}</p>
                <p className="email">{user.email}</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
