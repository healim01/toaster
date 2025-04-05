import React from 'react';
import Button from './Button';

interface Props extends React.ComponentProps<typeof Button> {
  positionClassName?: string;
}

const FloatingButton = ({
  positionClassName = 'bottom-4 right-4 md:bottom-8 md:right-8',
  className = '',
  ...props
}: Props) => {
  return (
    <div className={`fixed z-50 ${positionClassName}`}>
      <Button {...props} className={className} />
    </div>
  );
};

export default FloatingButton;
