import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

interface ChipProps extends MuiChipProps {
  label?: string;
  sx?: object; // Use sx instead of style
  onClick?: () => void;
}

export const Chip = ({ label, sx, ...props }: ChipProps) => {
  return (
    <MuiChip sx={{ textTransform: 'none', ...sx }} {...props} label={label} />
  );
};
