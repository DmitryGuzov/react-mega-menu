import React from "react";
// Components
import { ReactMegaMenu } from "react-mega-menu";
// Models
import { SubItemsModel } from "../../../../models/sub-items.model";
import SubMenuItemsList from "../submenu-items-list/submenu-items-list";

interface SubMenuItemProps {
  items: Array<SubItemsModel>;
}

function SubMenuItem({ items }: SubMenuItemProps): JSX.Element {
  let newItems: Array<SubItemsModel> = [];

  items.forEach((sub) => {
    newItems.push({
      label: sub.label,
      key: sub.key,
      items: <SubMenuItemsList items={sub.items} />,
    });
  });

  return (
    <>
      <div className="submenu-item">
        <ReactMegaMenu
          direction={"RIGHT"}
          styleConfig={{
            ...styles,
          }}
          data={newItems}
        />
      </div>
    </>
  );
}
const styles = {
  menuProps: {
    style: {
      border: "2px solid red",
      height: "20em",
      width: "30%",
      padding: "2px",
      margin: "0",
      order: "1",
    },
  },
  contentProps: {
    style: {
      width: "70%",
      border: "2px solid yellow",
      padding: "2px",
      order: "2",
    },
  },
  menuItemProps: {
    style: {
      border: "2px solid green",
      padding: "2px",
      height: "2em",
    },
  },
  menuItemSelectedProps: {
    style: {
      border: "2px solid purple",
      padding: "2px",
      height: "2em",
      backgroundColor: "grey",
    },
  },
  containerProps: {
    style: {
      border: "2px solid blue",
      width: "100%",
      padding: "2px",
      display: "flex",
      position: "relative",
    },
  },
};
export default SubMenuItem;
