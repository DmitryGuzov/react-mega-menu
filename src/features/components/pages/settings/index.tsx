import React, { useState } from "react";
import Layout from "../../../layouts/layout/layout";
import CustomButton from "../../common/button";
import CustomInput from "../../common/input/CustomInput";
import NavTree from "../../common/nav-tree";
import CustomTree from "../../common/tree";
import "./index.css";

function Settings() {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(0);
  const items = [
    {
      title: "Settings",
      items: ["Step 1", "Step 2", "Step 3"],
      count: 1
    },
    {
      title: "Administration",
      items: ["Licensing", "Administrators"],
      count: 2
    },
  ];
  const handleActiveTab = (idx1: number, idx2: number) => {
    setActiveTab(idx1);
    setActive(idx2);
  };
  return (
    <>
      <Layout>
        <div className="tabs">
          <div className="left">
            <h2>Settings</h2>
            <NavTree
              items={items}
              handleActiveTab={handleActiveTab}
              active={active}
              activeTab={activeTab}
            />
          </div>
          <div className="right">
            <CustomInput
              type="text"
              clearable
              placeholder="Type menu item..."
            />
            <CustomButton primary content="Save" />
            <CustomTree />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Settings;
