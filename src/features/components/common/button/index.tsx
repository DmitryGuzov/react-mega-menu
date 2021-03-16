import React from "react";
import { Button } from "@fluentui/react-northstar";

interface CustomButtonProps {
  content: string;
  primary?: boolean;
  secondary?: boolean;
  onClick?: (data?: any) => void;
  bg?: string;
  color?: string;
  disabled?: boolean;
}

const CustomButton = ({
  content,
  primary,
  secondary,
  bg,
  color,
  disabled,
  onClick,
}: CustomButtonProps): JSX.Element => (
  <>
    <Button
      disabled={disabled}
      content={content}
      primary={primary}
      secondary={secondary}
      onClick={onClick}
      style={{ backgroundColor: bg ? bg : "", color: color ? color : "" }}
    />
  </>
);

export default CustomButton;
