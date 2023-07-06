import React from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './Button.styles';

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
