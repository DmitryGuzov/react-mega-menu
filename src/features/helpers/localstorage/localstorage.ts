function getData(type: "menu-list" | "submenu-list" | "submenu-items") {
  const jsonData: any = localStorage.getItem(type);
  const list: Array<any> = JSON.parse(jsonData);
  if (list != undefined || null) {
    return { status: "error", message: "List not found.", data: list };
  } else {
    return { status: "error", message: "List not found.", data: [] };
  }
}
interface ItemsModel {
  label: string;
  key: string | number;
  items: Array<ItemsModel>;
}
interface MenuItemModel {
  label: string;
  key: string | number;
  items: Array<any>;
}
function createMenuItem(label: string, key: string | number) {
  let list: Array<MenuItemModel> = getData("menu-list").data;
  let menuItem = {
    label: label,
    key: key,
    items: [],
  };
  list.push(menuItem);
  localStorage.setItem("menu-list", JSON.stringify(allData.categories));
  return {
    status: "success",
    message: "Menu Item created  success!",
  };
}
function createSubMenu(label: string, key: string | number) {
  let list: Array<MenuItemModel> = getData("menu-list").data;
  let menuItem = {
    label: label,
    key: key,
    items: [],
  };
  list.push(menuItem);
  localStorage.setItem("menu-list", JSON.stringify(allData.categories));
  return {
    status: "success",
    message: "Menu Item created  success!",
  };
}
function createSubMenuItem() {}

export { getData, createMenuItem, createSubMenu, createSubMenuItem };

// MOCK DATA

const allData = {
  categories: [
    {
      label: "Category1",
      key: "Category1",
      items: [
        {
          label: "Subcategory 1",
          key: "subcategory 1",
          items: [
            { label: "Title 1", key: "Title 1", items: ["item 1", "item 2"] },
            { label: "Title 2", key: "Title 2", items: ["item 1"] },
          ],
        },
      ],
    },
    {
      label: "Category2",
      key: "Category2",
      items: [
        {
          label: "Subcategory 1",
          key: "subcategory 1",
          items: [
            { label: "Title 3", key: "Title 3", items: ["item 1", "item 2"] },
            { label: "Title 4", key: "Title 4", items: ["item 1"] },
          ],
        },
      ],
    },
    {
      label: "Category3",
      key: "Category3",
      items: [
        {
          label: "Subcategory 1",
          key: "subcategory 1",
          items: [
            { label: "Title 5", key: "Title 5", items: ["item 1", "item 2"] },
            { label: "Title 6", key: "Title 6", items: ["item 1"] },
            { label: "Title 7", key: "Title 7", items: ["item 1", "item 2"] },
            { label: "Title 8", key: "Title 8", items: ["item 1"] },
          ],
        },
        {
          label: "Subcategory 2",
          key: "subcategory 2",
          items: [
            { label: "Title 1", key: "Title 1", items: ["item 1", "item 2"] },
            { label: "Title 2", key: "Title 2", items: ["item 1"] },
            { label: "Title 3", key: "Title 3", items: ["item 1", "item 2"] },
            { label: "Title 4", key: "Title 4", items: ["item 1"] },
          ],
        },
      ],
    },
  ],
  subcategories: [],
  items: [],
};

const subcategories = [];
const categories2 = [
  {
    label: "Category1",
    key: "Category1",
    items: "Category1 content",
  },
  {
    label: "Category2",
    key: "Category2",
    items: "Category2 content",
  },
  {
    label: "Category3",
    key: "Category3",
    items: "Category3 content",
  },
];
