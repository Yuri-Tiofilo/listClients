import React, { createContext, useCallback, useState, useContext } from 'react';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}
interface SignInCredentials {
  email: string;
  password: string;
}
interface ClientState {
  name: string;
  email: string;
  dateBirth: string;
  cpf: string;
  cellphone: string;
  observation?: string;
}

interface ClientContextData {
  client: ClientState[];
  addNewClient(data: ClientState): void;
  loading: boolean;
  removeClient(data: ClientState[]): void;
}


const ClientContext = createContext<ClientContextData>({} as ClientContextData);

const ClientProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ClientState[]>(() => {
    const clients = localStorage.getItem('@Faasp:clients');
    if (clients) {
      return JSON.parse(clients);
    }
    return [] as ClientState[];
  });

  const addNewClient = useCallback((newClient: ClientState) => {
    setLoading(true);

    const listClients = [...data, newClient];

    localStorage.setItem('@Faasp:clients', JSON.stringify(listClients));

    setLoading(false);
  }, []);

  const removeClient = useCallback((listClients: ClientState[]) => {
    localStorage.setItem('@Faasp:clients', JSON.stringify(listClients));

    setData(listClients);
  }, [])

  return (
    <ClientContext.Provider
      value={{ client: data, addNewClient, loading, removeClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};
function useAuth(): ClientContextData {
  const context = useContext(ClientContext);

  return context;
}
export { ClientProvider, useAuth };
