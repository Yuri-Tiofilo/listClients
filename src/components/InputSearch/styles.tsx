import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';
import { colors } from '../../styles';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}
interface InputProps {
  iconExist: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.white};
  border-radius: 10px;
  border: 1.5px solid ${colors.regular};
  padding: 20px 20px;
  height: 50px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  /* flex: 1; */
  color: ${colors.darker};
  & + div {
    margin-top: 10px;
  }
`;

export const TextInput = styled.input`
  background: transparent;
  flex: 1;
  /* width: 100%; */
  border: 0;
  color: ${colors.darker};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  &::placeholder {
    color: #666863;
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  /* margin-left: 16px; */
  svg {
    margin: 0;
  }
  span {
    background: ${colors.danger};
    color: #fff;
    &::before {
      border-color: ${colors.danger} transparent;
    }
  }
`;
