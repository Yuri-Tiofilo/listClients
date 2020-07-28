import styled from 'styled-components';

export const Container = styled.button`
  height: 65px;
  width: 65px;
  background: #f78;

  border: 0;

  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 110px;

  right: 400px;
  position: absolute;

  :hover {
    cursor: pointer;
  }

  strong {
    font-size: 27px;
    color: #fff;
  }

  @media (min-width: 300px) {
    right: 50px;
  }
  @media (min-width: 400px) {
    right: 50px;
  }
  @media (min-width: 800px) {
    right: 100px;
  }
  @media (min-width: 1200px) {
    right: 300px;
  }
`;
