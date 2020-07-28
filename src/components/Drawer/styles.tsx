import styled from 'styled-components';
import {
  FiMenu,
  FiHome,
  FiCreditCard,
  FiUser,
  FiDollarSign,
} from 'react-icons/fi';

import { colors } from '../../styles';

export const Container = styled.div``;

export const AreaDrawer = styled.div`
  width: 300px;
  height: 100%;
`;

export const AreaIconMenu = styled.div`
  display: flex;
  color: ${colors.white};
  margin-left: -40px;
`;

export const IconMenu = styled(FiMenu)`
  font-size: 23px;
`;

export const IconHome = styled(FiHome)``;

export const IconCardCredit = styled(FiCreditCard)``;

export const IconProfile = styled(FiUser)``;

export const IconExit = styled(FiDollarSign)``;

export const AreaImageDrawer = styled.div`
  display: flex;
  background: ${colors.primary};
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const ImageDrawer = styled.img`
  height: 100px;
`;

export const AreaItens = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 10px;
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 35px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${colors.darker};
`;

export const AreaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  margin-right: 5px;
  color: ${colors.primary};
`;

export const AreaName = styled.div`
  width: 100%;
`;

export const AreaExit = styled.div``;
