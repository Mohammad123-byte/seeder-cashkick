import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/material/styles';
import React from 'react';

export interface TypographyProps {
  variant?:
    | 'title'
    | 'heading1'
    | 'heading2'
    | 'body2'
    | 'caption'
    | 'button'
    | 'body1';
  text: string;
  sx?: SxProps;
}

const Text = ({ variant, text, sx }: TypographyProps) => {
  return (
    <Typography variant={variant} sx={sx}>
      {text}
    </Typography>
  );
};
export default Text;
