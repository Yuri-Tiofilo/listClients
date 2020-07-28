import styled from 'styled-components';
import { FiTrash2 } from 'react-icons/fi';

export const Container = styled.div``;

export const ListClient = styled.div`
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
  height: 100%;
  font-size: 24px;
  margin-left: 16px;
`;

export const NoClient = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    margin-top: 50px;
  }
`;

export const Divider = styled.div`
  width: 700px;
  height: 20px;
  border: 1px solid #000;
  background: #000;
`;

export const GridClients = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding-top: 10px;
    padding-bottom: 20px;
  }

  tbody tr {
    margin-bottom: 5px;
  }
  thead td {
    padding: 12px 12px 0 0;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
`;
export const IconDelete = styled(FiTrash2)`
  cursor: pointer;
`;
