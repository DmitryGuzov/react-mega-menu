import React, { useEffect, useState } from "react";
// styles
import "./index.css";
// other
import { getData } from "../../../helpers/localstorage/localstorage";
import Layout from "../../../layouts/layout/layout";
// Components
import NavTree from "../../common/nav-tree";
import StepOne from "../../step-one";
import StepThree from "../../step-three";
import StepTwo from "../../step-two";

const items = [
  {
    title: "Settings",
    items: ["Step 1", "Step 2", "Step 3"],
    count: 1,
  },
  {
    title: "Administration",
    items: ["Licensing", "Administrators"],
    count: 2,
  },
];
function Settings() {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(0);

  const handleActiveTab = (idx1: number, idx2: number) => {
    setActiveTab(idx1);
    setActive(idx2);
  };

  function handleGetList() {
    let data = getData().data;
    console.log(data);
  }

  useEffect(() => {
    handleGetList();
    return () => {};
  }, []);

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
            {activeTab === 0 && active === 0 ? <StepOne /> : null}
            {activeTab === 0 && active === 1 ? <StepTwo /> : null}
            {activeTab === 0 && active === 2 ? <StepThree /> : null}
            {activeTab === 1 && active === 0 ? <h2>Licensing</h2> : null}
            {activeTab === 1 && active === 1 ? <h2>Administrators</h2> : null}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Settings;
