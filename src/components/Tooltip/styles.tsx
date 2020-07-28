import styled from 'styled-components';

import { colors } from '../../styles';

export const Container = styled.div`
  position: relative;
  span {
    width: 160px;
    background: ${colors.primary};
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
    opacity: 1;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: ${colors.white};
    &::before {
      content: '';
      border-style: solid;
      border-color: ${colors.primary} transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    cursor: pointer;
    visibility: visible;
  }
`;
