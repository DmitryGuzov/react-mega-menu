import React from "react";
import { Tree } from "@fluentui/react-northstar";
import {
  TriangleDownIcon,
  TriangleEndIcon,
} from "@fluentui/react-icons-northstar";

const items = [
  {
    id: "tree-title-customization-item-1",
    title: "1",
    items: [
      {
        id: "tree-title-customization-item-2",
        title: "1.1",
        items: [
          {
            id: "tree-title-customization-item-3",
            title: "1.1.1",
          },
        ],
      },
    ],
  },
  {
    id: "tree-title-customization-item-4",
    title: "2",
    items: [
      {
        id: "tree-title-customization-item-5",
        title: "2.1",
        items: [
          {
            id: "tree-title-customization-item-6",
            title: "2.1.1",
          },
        ],
      },
    ],
  },
  {
    id: "tree-title-customization-item-7",
    title: "3",
    items: [
      {
        id: "tree-title-customization-item-8",
        title: "3.1",
        items: [
          {
            id: "tree-title-customization-item-9",
            title: "3.1.1",
          },
        ],
      },
    ],
  },
  {
    id: "tree-title-customization-item-10",
    title: "4",
    items: [
      {
        id: "tree-title-customization-item-11",
        title: "4.1",
      },
    ],
  },
];

const titleRenderer = (
  Component,
  { content, expanded, open, hasSubtree, ...restProps }
) => (
  <Component expanded={expanded} hasSubtree={hasSubtree} {...restProps}>
    {expanded ? <TriangleDownIcon /> : <TriangleEndIcon />}
    {content}
  </Component>
);

const CustomTree = () => (
  <Tree
    aria-label="Custom title"
    items={items}
    renderItemTitle={titleRenderer}
  />
);

export default CustomTree;
