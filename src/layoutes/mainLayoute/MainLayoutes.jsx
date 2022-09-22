import React from "react";
import { Row, Col } from "antd";
import Navbar from "../../components/navBar/Navbar";
import MenuBar from "../../components/menuBar/MenuBar";
import Categories from "../../components/categories/Categories";
import Sidebar from "../../components/sideBar/Sidebar";
const MainLayoutes = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Row>
        <Col xs={24} md={1}>
          <MenuBar />
        </Col>
        <Col xs={24} md={1}>
          <Sidebar />
        </Col>
        <Col xs={24} md={8}>
          <Categories />
        </Col>
        <Col xs={24} md={1}></Col>
        <Col xs={24} md={1}></Col>
      </Row>
    </div>
  );
};

export default MainLayoutes;
