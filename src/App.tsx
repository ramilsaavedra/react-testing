import './App.css';
import UserForm from './components/UserForm.tsx';
import UserList from './components/UserList.tsx';
import { UserContextProvider } from './context/userContext.tsx';

function App() {
  return (
    <UserContextProvider>
      <UserForm />
      <UserList />
    </UserContextProvider>
  );
}

export default App;
