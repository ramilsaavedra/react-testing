import { useContext } from 'react';
import UserContext from '../context/userContext.tsx';

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UseContextProvider');
  }
  return context;
};

export default useUserContext;
