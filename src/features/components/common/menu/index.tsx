import React, { useEffect, useState } from "react";
import "./Menu.css";

import { ReactMegaMenu } from "react-mega-menu";

import {
  getData,
  createMenuItem,
} from "../../../helpers/localstorage/localstorage";

import SubMenuItem from "./submenu-item/submenu-item";
import SubMenuItemsList from "./submenu-items-list/submenu-items-list";

interface MenuProps {}

function Menu({}: MenuProps): JSX.Element {
  const [list, setList] = useState<any>([]);

  function handleSetData() {
    createMenuItem("Category 2", "Category 2");
  }

  useEffect(() => {
    console.log(list);
  }, [list]);

  const items2 = [
    { label: "Title 5", key: "Title 5", items: ["item 1", "item 2"] },
  ];
  const items3 = [
    { label: "Title 6", key: "Title 6", items: ["item 1"] },
    { label: "Title 7", key: "Title 7", items: ["item 1", "item 2"] },
    { label: "Title 8", key: "Title 8", items: ["item 1"] },
  ];

  const object = [
    {
      categories: [],
      subcategories: [],
      items: [],
    },
    {
      subcategories: [],
    },
    {
      items: [],
    },
  ];

  const subcategories3 = [
    {
      label: "Category2",
      key: "Category2",
      items: <SubMenuItemsList items={items2} />,
    },
  ];
  const subcategories2 = [
    {
      label: "Category1",
      key: "Category1",
      items: <SubMenuItemsList items={items2} />,
    },
    {
      label: "Category2",
      key: "Category2",
      items: <SubMenuItemsList items={items3} />,
    },
  ];
  const categories = [
    {
      label: "Category1",
      key: "Category1",
      items: <SubMenuItem items={subcategories2} />,
    },
    {
      label: "Category2",
      key: "Category2",
      items: <SubMenuItem items={subcategories3} />,
    },
  ];
  return (
    <>
      <div className="menu-wrapper">
        <ReactMegaMenu
          direction={"RIGHT"} // optional, defaults to "RIGHT", takes in "RIGHT" || "LEFT"
          styleConfig={{
            ...styles,
          }}
          data={categories}
        />
        <button onClick={handleSetData}>Set</button>
      </div>
    </>
  );
}

const styles = {
  menuProps: {
    style: {
      border: "2px solid red",
      height: "auto",
      width: "100%",
      padding: "2px",
      margin: "0",
      order: "1",
      display: "flex",
    },
  },
  contentProps: {
    style: {
      width: "100%",
      border: "2px solid yellow",
      padding: "2px",
      order: "2",
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
  containerProps: {
    style: {
      border: "2px solid blue",
      padding: "2px",
      display: "flex",
      flexDirection: "column",
      height: "auto",
      position: "relative",
    },
  },
};
export default Menu;
