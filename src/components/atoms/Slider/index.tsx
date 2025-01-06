import React from 'react';
import { Slider } from '@mui/material';
import theme from '../../../themes';

export interface SliderProps {
  onChange?: (value: number) => string;
  value: number;
  maxValue: number;
  onSliderChange?: (event: Event, newValue: number | number[]) => void; // Fixed typo: `onSilderChange` -> `onSliderChange`
}

export const Slide = ({
  value,
  maxValue,
  onChange,
  onSliderChange, // Updated prop name
}: SliderProps) => {
  return (
    <Slider
      value={value}
      defaultValue={0.0}
      getAriaValueText={onChange}
      max={maxValue}
      onChange={onSliderChange} // Updated prop usage
      step={1}
      sx={{
        width: 300,
        color: theme.palette.primary.primaryAlphaPurple500,
        '& .MuiSlider-thumb': {
          borderRadius: '8px',
        },
      }}
    />
  );
};
