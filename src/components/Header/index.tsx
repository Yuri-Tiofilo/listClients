import React from 'react';

import Drawer from '../Drawer';

import { Container, AreaHeader, AreaIcon, IconBack, Title } from './styles';

interface HeaderProps {
  isSmall: boolean;
  isMenu?: boolean;
  title: string;
  functionOnClick(): void;
}

const Header: React.FC<HeaderProps> = ({
  isSmall,
  isMenu,
  title,
  functionOnClick,
}) => {
  return (
    <Container isSmall={isSmall}>
      <AreaHeader>
        <Title>
          <AreaIcon>
            {isMenu ? <Drawer /> : <IconBack onClick={functionOnClick} />}
          </AreaIcon>
          <strong>{title}</strong>
        </Title>
      </AreaHeader>
    </Container>
  );
};

export default Header;
