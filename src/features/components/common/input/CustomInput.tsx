import React from "react";
import { Input } from "@fluentui/react-northstar";
import { AnyARecord } from "node:dns";

interface CustomInputProps {
  type: string;
  placeholder?: string;
  onChange?: (event: any) => void;
  value?: string;
}

const CustomInput = ({
  type,
  placeholder,
  value,
  onChange,

}: CustomInputProps) => (
  <Input
    fluid
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export default CustomInput;
