import styled, { css } from 'styled-components';
import { FiMenu, FiChevronLeft } from 'react-icons/fi';

import { colors } from '../../styles';

interface StyleContainer {
  isSmall: boolean;
}

export const Container = styled.header<StyleContainer>`
  height: 60px;
  width: 100%;
  background: ${colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${(props) =>
    props.isSmall &&
    css`
      height: 142px;
      border: 0;
      /* border-radius: 0 0 30px 30px; */
    `};
`;
export const AreaHeader = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  color: ${colors.white};
  font-size: 20px;
`;

export const AreaIcon = styled.div`
  display: flex;
  width: 10%;
  font-size: 25px;
  margin-right: 0px;
  @media (min-width: 300px) {
    width: 10%;
    font-size: 18px;
  }
  @media (min-width: 400px) {
    width: 10%;
    font-size: 22px;
  }
  @media (min-width: 800px) {
    width: 3%;
    font-size: 25px;
  }
  @media (min-width: 1200px) {
    width: 2%;
    font-size: 25px;
  }
`;

export const IconMenu = styled(FiMenu)`
  font-weight: bold;
`;

export const IconBack = styled(FiChevronLeft)`
  font-weight: bold;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  font-weight: bold;
  > strong {
    font-size: 18px;
    font-weight: bold;
    margin-left: 6px;
  }
  @media (min-width: 300px) {
    width: 100%;
    /* padding-left: 10px; */
  }
  @media (min-width: 400px) {
    width: 100%;
    /* padding-left: 10px; */
  }
  @media (min-width: 800px) {
    width: 100%;
    /* padding-left: 20px; */
  }
  @media (min-width: 1200px) {
    width: 100%;
    /* padding-left: 20px; */
  }
`;
