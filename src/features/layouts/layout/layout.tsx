import React from "react";
import Header from "../../components/common/header";
import Navbar from "../../components/common/navbar";
import Sidebar from "../../components/common/sidebar";

import "./index.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="inner">
          <div className="container">
            <Sidebar />
            <div className="content">
              <Navbar />
              <div className="content-inner">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
