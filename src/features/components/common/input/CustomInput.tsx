import React from "react";
import { Input } from "@fluentui/react-northstar";

interface CustomInputProps {
  type: string;
  placeholder?: string;
  clearable?: boolean;
}

const CustomInput = ({ type, clearable, placeholder }: CustomInputProps) => (
  <Input fluid type={type} clearable={clearable} placeholder={placeholder} />
);

export default CustomInput;
