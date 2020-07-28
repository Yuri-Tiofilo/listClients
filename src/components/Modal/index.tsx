import React, { useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { FormHandles } from '@unform/core';

import Input from '../Input';
import Button from '../Button';
import TextArea from '../TextArea';

import { TitleModal } from './styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      width: 500,

      border: '0px',
      boxShadow: theme.shadows[5],
      borderRadius: 12,
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

interface Props {
  open: boolean;
  handleClose(): void;
  formRef: any;
  error?: boolean;
  handleNewCostumer(data: object): any;
}

const TransitionsModal: React.FC<Props> = ({
  open,
  handleClose,
  formRef,
  handleNewCostumer,
  error,
}) => {
  const classes = useStyles();

  const [cpfState, setCpfState] = useState('');

  const validateCpf = (strCPF: string): any => {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

      for (let i = 1; i <= 9; i =+ 1) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i =+ 1) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <TitleModal>Novo Cliente</TitleModal>
            <Form
              ref={formRef}
              onSubmit={(data) => {
                handleNewCostumer(data);
              }}
            >
              <Input name="name" placeholder="Nome" />
              <Input name="email" placeholder="E-mail" />
              <Input name="dateBirth" placeholder="Data de nascimento" />
              <Input
                name="cpf"
                placeholder="CPF"
                value={cpfState}
                onChange={(text) => {
                  setCpfState(text.target.value);
                }}
                onBlur={() => {validateCpf(cpfState)}}
                maxLength={9}
              />
              <Input name="cellphone" placeholder="Telefone" />

              <TextArea
                name="obsertation"
                id="123"
                maxLength={300}
                placeholder="Observação"
              />

              <Button type="submit">teste</Button>
            </Form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default TransitionsModal;
