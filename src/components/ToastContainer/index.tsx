import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './styles';
import { ToastMessage, useToast } from '../../hooks/toast';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotateX(180deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotateX(0deg)' },
      leave: { right: '-120%', opacity: 0, transform: 'rotateX(180deg)' },
    },
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item: message, key, props }) => (
        <Toast key={key} style={props} message={message} />
      ))}
    </Container>
  );
};
export default ToastContainer;
