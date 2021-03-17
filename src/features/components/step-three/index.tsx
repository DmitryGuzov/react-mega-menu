import {
  AddIcon,
  Button,
  Input,
  TrashCanIcon,
  Text,
} from "@fluentui/react-northstar";
import React, { useState, useEffect } from "react";
import {
  createSubMenuItem,
  getData,
  getSubcategoryItems,
} from "../../helpers/localstorage/localstorage";
import CustomButton from "../common/button";
import CustomDropdown from "../common/dropdown";

const StepThree = ({}: any): JSX.Element => {
  const [categories, setCategories] = useState<any>([]);
  const [currentCategoryIndex, setCurrentCategory] = useState(0);
  const [currentSubCategoryIndex, setCurrentSubCategory] = useState(0);
  const [subcategories, setSubcategories] = useState<any>([]);
  const [items, setItems] = useState<Array<any>>([
    { label: "", key: "", items: [""] },
  ]);

  const handleCreateSubCategory = () => {
    createSubMenuItem(currentCategoryIndex, currentSubCategoryIndex, items);
  };
  function handleGetList() {
    let data = getData().data;

    setCategories(data);
  }
  const handleSelectedMenu = (menu: any) => {
    if (menu !== "") {
      let subcategories: Array<any> = [];
      categories.map((category, index) => {
        if (category.label === menu) {
          setCurrentCategory(index);
          subcategories = category.subcategories;
        }
      });
      setSubcategories(subcategories);
    }
  };
  const handleSelectedSubMenu = (submenu: any) => {
    if (submenu !== "") {
      let items: Array<any> = [];
      subcategories.map((subcategory, index) => {
        if (subcategory.label === submenu) {
          setCurrentSubCategory(index);
          items = subcategory.items;
          let data: any = getSubcategoryItems(currentCategoryIndex, index);
          if (data.length > 0) {
            setItems([...data]);
          } else {
            setItems([{ label: "", key: "", items: [""] }]);
          }
        }
      });
    }
  };
  const handleChangeLabel = (idx: number) => (event: any) => {
    const newItems: Array<any> = items.map((item: any, sidx: number) => {
      if (idx !== sidx) return item;
      return {
        ...item,
        label: event.target.value,
      };
    });
    setItems(newItems);
  };
  const handleChangeItem = (idx1: number, idx2: number) => (event: any) => {
    const all: Array<any> = items;
    const all2: Array<any> = items[idx1].items;
    const newItems: Array<any> = all2.map((item: any, sidx: number) => {
      if (idx2 !== sidx) return item;
      return event.target.value;
    });
    all[idx1].items = newItems;
    setItems([...all]);
  };
  const handleAdd = (idx: number) => {
    let object = { label: "", key: "", items: [""] };
    const newItems = items;
    newItems.splice(idx + 1, 0, object);
    setItems([...newItems]);
  };
  const handleRemove = (idx: number) => {
    const newItems = items;
    newItems.splice(idx, 1);
    setItems([...newItems]);
  };
  const handleSubAdd = (idx1: number, idx2: number) => {
    let string = "";
    const all = items;
    const all2 = items[idx1].items;
    all2.splice(idx2 + 1, 0, string);
    all[idx1].items = all2;
    setItems([...all]);
  };
  const handleSubRemove = (idx1: number, idx2: number) => {
    const all = items;
    const all2 = items[idx1].items;
    all2.splice(idx2, 1);
    all[idx1].items = all2;
    setItems([...all]);
  };
  useEffect(() => {
    handleGetList();
    return () => {};
  }, []);

  return (
    <>
      <h3>Step 3 </h3>
      <CustomDropdown
        items={categories}
        placeholder="Select menu item..."
        handleSelect={handleSelectedMenu}
      />
      <br />
      <CustomDropdown
        items={subcategories}
        placeholder="Select submenu item..."
        handleSelect={handleSelectedSubMenu}
      />
      <br />

      <br />
      <br />
      {items.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <Input
                value={item.label}
                onChange={handleChangeLabel(index)}
                placeholder="Title..."
              />

              <br />
              {item.items.map((item2, index2) => {
                return (
                  <div key={index2}>
                    <Text
                      content="item: "
                      size="large"
                      style={{
                        display: "inline-block",
                      }}
                    />
                    <Input
                      value={item2}
                      onChange={handleChangeItem(index, index2)}
                    />
                    <Button
                      primary
                      icon={<AddIcon />}
                      iconOnly
                      onClick={() => handleSubAdd(index, index2)}
                    />

                    {item.items.length > 1 ? (
                      <Button
                        primary
                        icon={<TrashCanIcon />}
                        iconOnly
                        onClick={() => handleSubRemove(index, index2)}
                      />
                    ) : null}
                  </div>
                );
              })}
              <br />
              <Button
                primary
                icon={<AddIcon />}
                iconOnly
                onClick={() => handleAdd(index)}
              />
              {items.length > 1 ? (
                <Button
                  primary
                  icon={<TrashCanIcon />}
                  iconOnly
                  onClick={() => handleRemove(index)}
                />
              ) : null}
            </div>
            <br />
            <br />
          </div>
        );
      })}
      <CustomButton primary content="Save" onClick={handleCreateSubCategory} />
    </>
  );
};

export default StepThree;
