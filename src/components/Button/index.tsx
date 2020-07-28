import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const TextButton: React.FC<Props> = ({ children, ...rest }) => (
  <Button type="button" {...rest}>
    {children}
  </Button>
);

export default TextButton;
