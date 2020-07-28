import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
import { IconBaseProps } from 'react-icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
};

const FLoatButton: React.FC<Props> = ({ icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
      {Icon && <Icon size={24} color="#fff" />}
    </Container>
  );
};

export default FLoatButton;
