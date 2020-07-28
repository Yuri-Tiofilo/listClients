import React from 'react';
import { ToastProvider } from './toast';
import { ClientProvider } from './client';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <ClientProvider>{children}</ClientProvider>
  </ToastProvider>
);
export default AppProvider;
