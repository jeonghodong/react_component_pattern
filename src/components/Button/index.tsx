import { Button as MuiButton } from "@mui/material";
// import { useState } from "react";

export interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: "contained" | "outlined";
  size?: "large" | "medium" | "small" | "xsmall";
}

function ContainedButton({ ...props }: ButtonProps) {
  return (
    <MuiButton onClick={props.onClick} variant="contained" size={props.size}>
      {props.text}
    </MuiButton>
  );
}

function OutlinedButton({ ...props }: ButtonProps) {
  // const [bordercolor, setBordercolor] = useState("5px solid #00A9B8");

  // const handleMouseDown = () => {
  //   setBordercolor("5px solid #FFD400");
  // };

  return (
    <MuiButton
      variant="outlined"
      size={props.size}
      // sx={{ border: bordercolor }}
      // onMouseOver={handleMouseDown}
      onClick={props.onClick}
    >
      {props.text}
    </MuiButton>
  );
}

export default function Button({ ...props }: ButtonProps) {
  const BUTTON_VARIANT = {
    contained: <ContainedButton {...props} />,
    outlined: <OutlinedButton {...props} />,
  };

  return <>{BUTTON_VARIANT[props.variant]}</>;
}
