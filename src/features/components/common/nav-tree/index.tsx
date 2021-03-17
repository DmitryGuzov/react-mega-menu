import React from "react";
import { ShareGenericIcon } from "@fluentui/react-northstar";

import "./index.css";

interface NavTreeProps {
  items: any;
  activeTab: number;
  active: number;
  handleActiveTab: (index1: number, index2: number) => void;
}

const NavTree = ({
  items,
  activeTab,
  active,
  handleActiveTab,
}: NavTreeProps): JSX.Element => {
  return (
    <>
      <div className="nav-tree">
        {items.map((item, index1) => {
          return (
            <div key={index1}>
              <h3>
                <span>{item.count}</span> {item.title}
              </h3>
              <ul>
                {item.items.map((item, index2) => {
                  return (
                    <div
                      key={index2}
                      className={
                        activeTab === index1 && index2 === active
                          ? "active"
                          : ""
                      }
                      onClick={() => {
                        handleActiveTab(index1, index2);
                      }}
                    >
                      <ShareGenericIcon />
                      {item}
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(NavTree);
