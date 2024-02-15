import { createContext, useState, useMemo } from 'react';

interface UserContextProviderProps {
  children: React.ReactNode;
}

export interface UserProps {
  name: string;
  email: string;
}

interface UsersProps {
  users: UserProps[];
  handleUser: (user: UserProps) => void;
}

const defaultContext: UsersProps = {
  users: [],
  handleUser: () => {},
};

const UserContext = createContext(defaultContext);

export function UserContextProvider({
  children,
}: UserContextProviderProps): JSX.Element {
  const [users, setUsers] = useState<UserProps[]>([]);

  console.log(users, 'context');

  const handleUser = (user: UserProps) => {
    setUsers((prevValue) => {
      const newValue = [...prevValue, user];
      return newValue;
    });
  };

  const memoized = useMemo(() => ({ users, handleUser }), [users]);

  return (
    <UserContext.Provider value={memoized}>{children}</UserContext.Provider>
  );
}

export default UserContext;
