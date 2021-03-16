// get data from LS
function getData() {
  const jsonData: any = localStorage.getItem("menu-list");
  const data: any = JSON.parse(jsonData);
  if (data !== null) {
    return {
      status: "error",
      message: "List not found.",
      data: data,
    };
  } else {
    return { status: "error", message: "List not found.", data: [] };
  }
}

interface MenuItemModel {
  label: string;
  key: string | number;
  items: Array<any>;
}
// Menu
function createMenuItem(label: string, key: string | number) {
  let list: Array<any> = getData().data;
  let category = {
    label: label,
    subcategories: [],
  };
  list.push(category);

  localStorage.setItem("menu-list", JSON.stringify(list));
  return {
    status: "success",
    message: "Menu Item created  success!",
  };
}
function deleteMenuItem(index: number) {
  let list: Array<any> = getData().data;

  list.splice(index, 1);

  localStorage.setItem("menu-list", JSON.stringify(list));
  return {
    status: "success",
    message: "Menu Item created  success!",
  };
}
// Submenu
function createSubMenu(index: number, label: string, key: string | number) {
  let list: Array<any> = getData().data;
  let menuItem = {
    label: label,
    key: key,
    items: [],
  };
  list[index].subcategories.push(menuItem);
  localStorage.setItem("menu-list", JSON.stringify(list));
  return {
    status: "success",
    message: "Menu Item created  success!",
  };
}
function deleteSubMenu(menuIndex: number, submenuIndex: number) {
  let list: Array<any> = getData().data;
  list[menuIndex].subcategories.splice(submenuIndex, 1);
  localStorage.setItem("menu-list", JSON.stringify(list));
  return {
    status: "success",
    message: "Menu Item created  success!",
  };
}
// items
function createSubMenuItem(
  menuIndex: number,
  submenuIndex: number,
  data: Array<any>
) {
  let list: Array<any> = getData().data;
  list[menuIndex].subcategories[submenuIndex].items = data;
  localStorage.setItem("menu-list", JSON.stringify(list));
  return {
    status: "success",
    message: "Menu Item created  success!",
  };
}
function getSubcategoryItems(menuIndex: number, submenuIndex: number) {
  let list: Array<any> = getData().data;
  return list[menuIndex].subcategories[submenuIndex].items;
}

export {
  getData,
  createMenuItem,
  createSubMenu,
  createSubMenuItem,
  getSubcategoryItems,
};

// MOCK DATA
const object = [
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
];
