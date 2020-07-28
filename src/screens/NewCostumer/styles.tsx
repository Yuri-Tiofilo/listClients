import styled from 'styled-components';

import { FiArrowLeft } from 'react-icons/fi';

export const Container = styled.div`

`;

export const CardNewCostumer = styled.div`
  width: 700px;
  background: #fff;
  position: relative;

  margin: 0 auto;
  box-shadow: 3px 3px 1px 1px rgba(0, 0, 0, 0.1);
  top: -50px;
  border-radius: 12px;

  padding: 20px 20px 30px 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 24px;
  margin-left: 16px;
`;
export const AreaHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 25px;
`;

export const AreaIcon = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconBackHome = styled(FiArrowLeft)`
  font-size: 24px;

  cursor: pointer;
`;

