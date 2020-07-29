import React, {
  InputHTMLAttributes,
} from 'react';

import {FiSearch} from 'react-icons/fi';

import { TextInput, Container, Error } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<Props> = ({ name, ...rest }) => {
  return (
    <Container>
      <TextInput {...rest} />

      <FiSearch size={20} />
    </Container>
  );
};

export default Input;
