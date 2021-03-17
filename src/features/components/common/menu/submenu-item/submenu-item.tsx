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
  containerProps: {
    style: {
      width: "100%",
      height: "500px",
      display: "flex",
      position: "relative",
    },
  },
  menuProps: {
    style: {
      height: "100%",
      width: "250px",
      margin: "0px",
      order: "1",
    },
  },
  menuItemProps: {
    style: {
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: "20px",
      marginLeft: "0",
    },
  },
  menuItemSelectedProps: {
    style: {
      height: "40px",
      backgroundColor: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: "20px",
      marginLeft: "0",
    },
  },
  contentProps: {
    style: {
      border: "2px solid purple",
      borderWidth: "3px 0 0 0",
      width: "450px",
      height: "500px",
      // padding: "2px",
      background: "#ffffff",
      order: "2",
    },
  },
};
export default SubMenuItem;
