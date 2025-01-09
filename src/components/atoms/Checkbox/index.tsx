import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import theme from '../../../theme';
import { ThemeProvider } from '@mui/material';

export interface CheckboxLabelsProps {
  label: string;
  required?: boolean;
  defaultChecked?: boolean;
}

const CheckboxLabel = ({ label, defaultChecked }: CheckboxLabelsProps) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={<Checkbox defaultChecked={defaultChecked} />}
        label={label}
      />
    </ThemeProvider>
  );
};

export default CheckboxLabel;
