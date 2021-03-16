import React, { useEffect, useState } from "react";
import { createMenuItem } from "../../../helpers/localstorage/localstorage";
import Layout from "../../../layouts/layout/layout";
import CustomButton from "../../common/button";
import CustomInput from "../../common/input/CustomInput";
import NavTree from "../../common/nav-tree";
import CustomTree from "../../common/tree";
import "./index.css";

function Settings() {
  const [activeTab, setActiveTab] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [menu, setMenu] = useState("");
  const [active, setActive] = useState(0);
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
  const handleMenu = (evt: any) => {
    setMenu(evt.target.value);
  };

  const handleActiveTab = (idx1: number, idx2: number) => {
    setActiveTab(idx1);
    setActive(idx2);
  };
  const handleCreateCategory = () => {
    if (menu.trim() !== "") {
      createMenuItem(menu, menu);
    }
  };
  useEffect(() => {
    if (menu.length > 3) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    return () => {};
  }, [menu]);
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
              onChange={handleMenu}
              value={menu}
            />
            <CustomButton
              secondary
              content="Discard"
              onClick={() => {
                setMenu("");
              }}
              disabled={!disabled}
            />
            <CustomButton
              primary
              content="Save"
              onClick={handleCreateCategory}
              disabled={!disabled}
            />
            <CustomTree />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Settings;
