import { Avatar as AvatarComponent } from '@mui/material';
import React from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  width?: string;
  height?: string;
}

const Avatar = ({ height, width, ...props }: AvatarProps) => {
  return (
    <AvatarComponent
      style={{ borderRadius: '12px' }}
      variant='circular'
      {...props}
      sx={{ height, width }}
    />
  );
};

Avatar.defaultProps = {
  height: '34px',
  width: '34px',
};

export default Avatar;
