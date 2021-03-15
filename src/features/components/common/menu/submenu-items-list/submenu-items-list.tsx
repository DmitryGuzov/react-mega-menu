import React from "react";
import { ListItemModel } from "../../../../models/list-item.model";

import "./submenu-items-list.css";

interface ItemProps {
  title: string;
}

const Item = ({ title }: ItemProps): JSX.Element => {
  return (
    <>
      <li>{title}</li>
    </>
  );
};

interface SubMenuItemProps {
  items: Array<ListItemModel>;
}

function SubMenuItemsList({ items }: SubMenuItemProps): JSX.Element {
  return (
    <>
      <div className="submenu-items-list">
        {items.map((el, index) => {
          return (
            <div className="box" key={index}>
              <h3>{el.label}</h3>
              <ul key={el.key}>
                {el.items.map((el, index) => {
                  return <Item key={index} title={el} />;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SubMenuItemsList;
