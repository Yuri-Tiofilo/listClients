import React, { useCallback, useRef, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import getValidationErrors from '../../utils/getValidationErrors';
import { DTOFormNewCostumer } from '../../dtos';
import { cpfMask, celPhoneMask, removeSpaceCpf, dateBirthMask, validationDate } from '../../utils/maskInputs';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/client';

import { Container, CardNewCostumer, Title, AreaHeader, IconBackHome, AreaIcon } from './styles';

const NewCostumer: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [cpfState, setCpfState] = useState('');
  const [cellPhoneState, setcellPhoneState] = useState('');
  const [dateBirthState, setdateBirthState] = useState('');

  const { addNewClient, loading, editClientData, showClient } = useAuth();

  console.log('editClientData');
  console.log(editClientData);

  const history = useHistory();

  const { addToast } = useToast();

  const formNewCustomer = useCallback(async (data: DTOFormNewCostumer) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um email'),
        name: Yup.string().required('Nome é obrigatório'),
        dateBirth: Yup.string().required('Data de nascimento obrigatório'),
        cpf: Yup.string().required('CPF obrigatório'),
        cellphone: Yup.string().required('Telefone obrigatório'),
      });

      const alphaExp = /^[a-zA-Z-0-9]+$/;

      if (!data.name.match(alphaExp) && data.name !== '') {
        return addToast({
          type: 'error',
          title: 'Erro no nome',
          description: 'Nome não pode ter caracteres especiais',
        });
      }

      await schema.validate(data, {
        abortEarly: false,
      });

      setTimeout(() => {
        addNewClient(data);
      }, 3000);

      addNewClient(data);

      history.replace('/');

      setCpfState('');
      setcellPhoneState('');
      setdateBirthState('');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      return addToast({
        type: 'error',
        title: 'Erro na authenticação',
        description: 'Verifique os campos',
      });
    }
  }, []);

  function valitionCpf(): any {
    let soma = 0;
    let resto;
    let inputCPF = removeSpaceCpf(cpfState);

    if (inputCPF == '00000000000') return addToast({
      type: 'error',
      title: 'Erro no CPF',
      description: 'Verifique o campo de CPF',
    });

    for(let i = 1; i <= 9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if((resto == 10) || (resto == 11)) resto = 0;

    if(resto != parseInt(inputCPF.substring(9, 10))) return addToast({
      type: 'error',
      title: 'Erro no CPF',
      description: 'Verifique o campo de CPF',
    });

    soma = 0;
    for(let i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;

    if (resto != parseInt(inputCPF.substring(10, 11))) return addToast({
      type: 'error',
      title: 'Erro no CPF',
      description: 'Verifique o campo de CPF',
    });
    return true;
  }

  function validationCellPhone(): any {
    if (cellPhoneState !== '') {
      const validate = cellPhoneState.substring(4, 5);

      if (validate !== '9') {
        return addToast({
          type: 'error',
          title: 'Erro no Telefone',
          description: 'Verifique o campo de Telefone',
        });
      }
    }
  }

  function validationDateBirth(): any {
    const validate = validationDate(dateBirthState);

    if (validate === false) {
      return addToast({
        type: 'error',
        title: 'Erro na data de nascimento',
        description: 'Verifique o campo de data de nascimento',
      });
    }
  }

  function backHome(): void {
    showClient({} as DTOFormNewCostumer);

    history.goBack();
  }

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header
            functionOnClick={() => {
              console.log('veio aqi');
            }}
            isSmall
            isMenu
            title="Novo Cliente"
          />

          <CardNewCostumer>
            <AreaHeader>
              <AreaIcon>
                <IconBackHome onClick={() => {backHome();}} />
              </AreaIcon>
              <Title>Novo Cliente</Title>
            </AreaHeader>
            <Form ref={formRef} onSubmit={formNewCustomer}>
              <Input name="name" placeholder="Nome" defaultValue={editClientData.name} />
              <Input name="email" placeholder="E-mail" defaultValue={editClientData.email} />
              <Input
                name="dateBirth"
                placeholder="Data de nascimento"
                value={
                  editClientData.dateBirth !== undefined
                  ? editClientData.dateBirth
                  : dateBirthState
                }
                onChange={(text) => {
                  setdateBirthState(dateBirthMask(text.target.value));
                }}
                onBlur={validationDateBirth}
                maxLength={10}
              />
              <Input
                name="cpf"
                placeholder="CPF"
                maxLength={14}
                value={
                  editClientData.cpf !== undefined
                  ? editClientData.cpf
                  : cpfState
                }
                onChange={(text) => {
                  setCpfState(cpfMask(text.target.value));
                }}
                onBlur={valitionCpf}
              />
              <Input
                type="tel"
                name="cellphone"
                placeholder="Telefone"
                value={
                  editClientData.cellphone !== undefined
                  ? editClientData.cellphone
                  : cellPhoneState
                }
                onChange={(text) => {
                  setcellPhoneState(celPhoneMask(text.target.value));
                }}
                maxLength={14}
                onBlur={validationCellPhone}
              />
              <TextArea
                name="obsertation"
                id="123"
                maxLength={300}
                placeholder="Observação"
                defaultValue={editClientData.observation}
              />

              {editClientData.cellphone !== undefined ? (
                <Button type="submit">EDITAR</Button>
              ): (
                <Button type="submit">ADICIONAR</Button>
              )}
            </Form>
          </CardNewCostumer>
        </>
      )}

    </Container>
  );
}

export default NewCostumer;
