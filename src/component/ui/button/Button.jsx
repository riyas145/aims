import React from "react";
import { Button } from "@mui/material/Button";

export const CustomButton = ({color,variant,startIcon,disbaled,linkText}) => {
  return (
    <Button  variant='contained' >
      {linkText}
    </Button>
  );
};
