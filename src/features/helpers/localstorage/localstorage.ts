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
  localStorage.setItem("menu-list", JSON.stringify(object.categories));
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
  localStorage.setItem("menu-list", JSON.stringify(object.categories));
  return {
    status: "success",
    message: "Menu Item created  success!",
  };
}
function createSubMenuItem() {}

export { getData, createMenuItem, createSubMenu, createSubMenuItem };

// MOCK DATA
const object = {
  categories: [
    {
      label: "First menu item",
      subcategories: [
        {
          label: "1.1",
          key: "1.1",
          items: [
            {
              label: "Title category 1 subcategory 1.1",
              key: "Title category 1 subcategory 1.1",
              items: ["one", "two", "three"],
            },
            {
              label: "Title category 1 subcategory 1.1",
              key: "Title category 1 subcategory 1.1 2 ",
              items: ["one", "two"],
            },
          ],
        },
        {
          label: "1.2",
          key: "1.2",
          items: [
            {
              label: "Title category 1 subcategory 1.2",
              key: "Title category 1 subcategory 1.2",
              items: ["one"],
            },
          ],
        },
      ],
    },
    {
      label: "Second menu item",
      subcategories: [
        {
          label: "2.1",
          key: "2.1",
          items: [
            {
              label: "Title 2 -> 2.1",
              key: "Title 2 -> 2.1",
              items: ["one", "two"],
            },
          ],
        },
      ],
    },
  ],
};
