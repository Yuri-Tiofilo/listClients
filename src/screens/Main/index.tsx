import React, { useCallback, useState, useRef } from 'react';
import { FormHandles } from '@unform/core';

import { FiTrash2 } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import FloatButton from '../../components/FloatButton';
import {FiPlus} from 'react-icons/fi';

import { DTOFormNewCostumer } from '../../dtos';

import { useAuth } from '../../hooks/client';

import { Container, ListClient, Title, NoClient, GridClients, Divider, IconDelete } from './styles';

const Main: React.FC = () => {
  const history = useHistory();
  const { client, removeClient } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);

  console.log('client');
  console.log(client);

  const handleNewCostumer = useCallback(() => {
    history.push('/newCostumer');
  }, []);

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

    console.log(newList2);
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
          <Title>Clientes</Title>
          {client.length !== 0 ? (
            client.map((element, index) => (
              <GridClients>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{element.name}</td>
                    <td>{element.cpf}</td>
                    <td>{element.cellphone}</td>
                    <td>
                      <IconDelete size={22} onClick={() => {
                        removeClientList(element, index);
                      }} style={{marginBottom: 2}} />
                    </td>
                  </tr>
                </tbody>
              </GridClients>
            ))
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
