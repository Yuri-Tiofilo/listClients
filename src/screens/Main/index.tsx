import React, { useCallback, useState, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';

import { FiTrash2 } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import FloatButton from '../../components/FloatButton';
import Search from '../../components/InputSearch';
import {FiPlus} from 'react-icons/fi';

import { DTOFormNewCostumer } from '../../dtos';

import { useAuth } from '../../hooks/client';

import { Container, ListClient, Title, NoClient, GridClients, Divider, IconDelete, IconEdit, AreaHeaderList, AreaInput } from './styles';

const Main: React.FC = () => {
  const history = useHistory();
  const { client, removeClient, showClient } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);

  const [listAux, setListAux] = useState(client);

  const [searchState, setSearchState] = useState('');

  const handleNewCostumer = useCallback(() => {
    history.push('/newCostumer');
  }, []);

  useEffect(() => {
    const orderArray = client
      .filter(element => {
        return element.name.indexOf(searchState) !== -1;
      })
      .map(element => {
        return element;
      });

      setListAux(orderArray);
  }, [searchState]);

  function removeClientList(clientRemove: DTOFormNewCostumer, index: number): any {
    const indexClientList = client.findIndex(element => {
      return element.cpf === client[index].cpf;
    });

    const newList2 = client.filter((cli, indexClient) => {// eslint-disable-line
      if (indexClient !== indexClientList) {
        return cli;
      }
    });

    removeClient(newList2);
  }

  function editClient(clientEdit: DTOFormNewCostumer): void {
    showClient(clientEdit);

    history.push('/newCostumer');
  }

  return (
    <>
      <Container>
        <Header
          functionOnClick={() => {
            console.log('veio aqi');
          }}
          isSmall
          isMenu
          title="Clientes"
        />
        <FloatButton
          onClick={() => {
            handleNewCostumer();
          }}
          icon={FiPlus}
        />

        <ListClient>
          <AreaHeaderList>
            <Title>Clientes</Title>
            <AreaInput>
              <Search
                name="search"
                placeholder="pesquise por um cliente"
                value={searchState}
                onChange={(text) => {
                  setSearchState(text.target.value)
                }}
              />
            </AreaInput>
          </AreaHeaderList>
          {client.length !== 0 ? (
          <GridClients>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th />
              </tr>
            </thead>
            {listAux.map((element, index) => (
                <tbody>
                  <tr style={{padding: 25}}>
                    <td>{element.name}</td>
                    <td>{element.cpf}</td>
                    <td>{element.cellphone}</td>
                    <td>
                      <IconDelete size={22} onClick={() => {
                        removeClientList(element, index);
                      }} style={{marginBottom: 2}} />

                      <IconEdit size={22} onClick={() => {
                        editClient(element);
                      }} style={{marginBottom: 2, marginLeft: 15}} />
                    </td>
                  </tr>
                </tbody>
              ))}
            </GridClients>
          ) : (
            <NoClient>
              <div>não possui clientes</div>
            </NoClient>
          )}
        </ListClient>
      </Container>
    </>
  );
};

export default Main;
