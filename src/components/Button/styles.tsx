import styled from 'styled-components';
import { shade } from 'polished';

import { colors } from '../../styles';

export const Button = styled.button`
  background: ${colors.primary};
  height: 48px;
  border-radius: 10px;
  border: 0;
  padding: 0 10px;
  color: ${colors.white};
  width: 100%;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  &:hover {
    background: ${shade(0.03, `${colors.primary}`)};
  }
`;
