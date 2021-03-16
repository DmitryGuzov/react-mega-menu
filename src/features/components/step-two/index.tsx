import { Button, Input, TrashCanIcon } from "@fluentui/react-northstar";
import React, { useEffect, useState } from "react";
import {
  createSubMenu,
  getData,
} from "../../helpers/localstorage/localstorage";
import CustomButton from "../common/button";
import CustomDropdown from "../common/dropdown";
import CustomInput from "../common/input/CustomInput";

const StepTwo = ({}: any): JSX.Element => {
  const [categories, setCategories] = useState<any>([]);
  const [currentCategoryIndex, setCurrentCategory] = useState(0);
  const [subcategories, setSubcategories] = useState<Array<any>>([]);
  const [submenu, setSubMenu] = useState("");

  const handleChangeSubMenu = (evt: any) => {
    setSubMenu(evt.target.value);
  };
  const handleCreateSubCategory = () => {
    if (submenu.trim() !== "") {
      createSubMenu(currentCategoryIndex, submenu, submenu);
      handleGetList();
    }
    setSubcategories(categories[currentCategoryIndex].subcategories);
  };
  function handleGetList() {
    let data = getData().data;
    setCategories(data);
  }
  const handleSelectedMenu = (menu: any) => {
    if (menu != null) {
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
  const handleRemove = (idx: number) => {
    const newItems = subcategories;
    newItems.splice(idx, 1);
    console.log(idx);
    setSubcategories([...newItems]);
  };
  const handleChangeLabel = (idx: number) => (event: any) => {
    const newItems: Array<any> = categories.map((item: any, sidx: number) => {
      if (idx !== sidx) return item;
      return {
        ...item,
        label: event.target.value,
      };
    });
    setCategories(newItems);
  };
  useEffect(() => {
    console.log(subcategories);
  }, [subcategories]);
  useEffect(() => {
    handleGetList();
  }, []);

  return (
    <>
      <h3>Step 2</h3>
      <CustomDropdown
        items={categories}
        placeholder="Select menu item..."
        handleSelect={handleSelectedMenu}
      />
      <br />
      <CustomInput
        type="text"
        placeholder="Type submenu item..."
        onChange={handleChangeSubMenu}
        value={submenu}
      />
      <br />
      <br />
      <CustomButton
        secondary
        content="Discard"
        onClick={() => {
          setSubMenu("");
        }}
        disabled={submenu.trim().length <= 4}
      />
      <CustomButton
        primary
        content="Save"
        onClick={handleCreateSubCategory}
        disabled={submenu.trim().length <= 4}
      />
      <h3>Item List: </h3>
      {subcategories.map((item, index) => {
        return (
          <div key={index}>
            <Input value={item.label} onChange={handleChangeLabel(index)} />
            <Button
              primary
              icon={<TrashCanIcon />}
              iconOnly
              onClick={() => handleRemove(index)}
            />
          </div>
        );
      })}
      <br />
      <CustomButton
        secondary
        content="Discard changes"
        onClick={() => {
          handleGetList();
          setSubcategories(categories[currentCategoryIndex].subcategories);
        }}
      />
    </>
  );
};

export default StepTwo;
