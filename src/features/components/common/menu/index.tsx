import React, { useEffect, useState } from "react";
import "./Menu.css";

import { ReactMegaMenu } from "react-mega-menu";

import {
  getData,
  createMenuItem,
} from "../../../helpers/localstorage/localstorage";

import SubMenuItem from "./submenu-item/submenu-item";

interface MenuProps {}

function Menu({}: MenuProps): JSX.Element {
  const [list, setList] = useState<any>([]);

  function handleGetList() {
    let data = getData().data;
    const newCategories2: Array<any> = [];
    data.forEach((category) => {
      let object = {
        label: category.label,
        key: category.label,
        items: <SubMenuItem items={category.subcategories} />,
      };
      newCategories2.push(object);
    });
    setList(newCategories2);
  }
  useEffect(() => {
    handleGetList();
  }, []);

  return (
    <>
      <div className="menu-wrapper">
        {list.length > 0 ? (
          <ReactMegaMenu
            direction={"RIGHT"}
            styleConfig={{
              ...styles,
            }}
            data={list}
          />
        ) : (
          <h3>Empty</h3>
        )}
      </div>
    </>
  );
}

const styles = {
  containerProps: {
    style: {
      // border: "2px solid blue",
      width: "100%",
      padding: "2px",
      display: "flex",
      flexDirection: "column",
      height: "auto",
      position: "relative",
    },
  },
  menuProps: {
    style: {
      background: "#ffffff",
      height: "50px",
      width: "100%",
      padding: "2px",
      margin: "0",
      order: "1",
      display: "flex",
      alignItems: "center",
    },
  },
  menuItemProps: {
    style: {
      padding: "2px",
      height: "2em",
      cursor: "pointer",
    },
  },
  menuItemSelectedProps: {
    style: {
      borderBottom: "2px solid purple",
      padding: "2px",
      height: "2em",
      cursor: "pointer",
    },
  },
  contentProps: {
    style: {
      background: "gray",
      width: "700px",
      height: "500px",
      marginLeft: "50px",
      padding: "2px",
      order: "2",
    },
  },
};
export default Menu;
