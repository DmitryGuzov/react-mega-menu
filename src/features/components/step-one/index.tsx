import {
  AddIcon,
  Button,
  Input,
  TrashCanIcon,
} from "@fluentui/react-northstar";
import React, { useState, useEffect } from "react";
import {
  createMenuItem,
  getData,
} from "../../helpers/localstorage/localstorage";
import CustomButton from "../common/button";
import CustomInput from "../common/input/CustomInput";

interface StepOneProps {}

const StepOne = ({}: StepOneProps): JSX.Element => {
  const [menu, setMenu] = useState("");
  const [items, setItems] = useState<any>([
    { label: "", key: "", subcategoties: [] },
  ]);

  const [disabled, setDisabled] = useState(false);
  const handleMenu = (evt: any) => {
    setMenu(evt.target.value);
  };
  const handleCreateCategory = () => {
    if (menu.trim() !== "") {
      createMenuItem(menu, menu);
      handleGetList();
    }
  };
  const handleRemove = (idx: number) => {
    const newItems = items;
    newItems.splice(idx, 1);
    setItems([...newItems]);
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
  function handleGetList() {
    let data = getData().data;
    setItems(data);
  }
  useEffect(() => {
    handleGetList();
    return () => {};
  }, []);
  useEffect(() => {
    if (menu.trim().length > 3) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    return () => {};
  }, [menu]);
  return (
    <>
      <h3>Step 1</h3>
      <h4>Add one: </h4>
      <CustomInput
        type="text"
        placeholder="Type menu item..."
        onChange={handleMenu}
        value={menu}
      />
      <br />
      <br />
      <CustomButton
        secondary
        content="Discard"
        onClick={() => {
          setMenu("");
        }}
        disabled={!disabled}
      />
      <CustomButton
        primary
        content="Save"
        onClick={handleCreateCategory}
        disabled={!disabled}
      />
      <h3>Item List: </h3>
      {items.map((item, index) => {
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
        }}
      />
    </>
  );
};

export default StepOne;
function handleGetList() {
  throw new Error("Function not implemented.");
}
