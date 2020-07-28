import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { colors } from '../../styles';

import { TextInput, Container, Error } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  // const handleOnFocus = useCallback(() => {
  //   setIsFocused(true);
  // }, []);

  // const handleInputBlur = useCallback(() => {
  //   setIsFocused(false);

  //   setIsFilled(!!inputRef.current?.value);
  // }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isError={!!error} isFilled={isFilled} isFocused={isFocused}>
      <TextInput defaultValue={defaultValue} ref={inputRef} {...rest} />

      {error ? (
        <Error title={error}>
          <FiAlertCircle size={20} color={`${colors.danger}`} />
        </Error>
      ) : null}
    </Container>
  );
};

export default Input;
