import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import React from 'react';

export interface ButtonProps extends MuiButtonProps {
  label: string;
  sx?: object; // Use sx instead of style
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Proper type for onClick
}

const Button = ({ label, sx, ...props }: ButtonProps) => {
  return (
    <MuiButton sx={{ textTransform: 'none', ...sx }} {...props}>
      {label}
    </MuiButton>
  );
};

export default Button;
