import React from "react";
import { Dropdown } from "@fluentui/react-northstar";

interface CustomDropdownProps {
  items: Array<any>;
  placeholder?: string;
  handleSelect: (value: any) => void;
}

const CustomDropdown = ({
  items,
  placeholder = "Enter...",
  handleSelect,
}: CustomDropdownProps): JSX.Element => {
  let newItems: Array<string> = items.map((item) => {
    return item.label;
  });

  return (
    <>
      <Dropdown
        items={newItems}
        placeholder={placeholder}
        checkable
        onActiveSelectedIndexChange={(index) => {
          console.log(index);
        }}
        onChange={(e, { value }) => {
          handleSelect(value);
        }}
        getA11ySelectionMessage={{
          onAdd: (item) => `${item} has been selected.`,
        }}
      />
    </>
  );
};

export default CustomDropdown;
