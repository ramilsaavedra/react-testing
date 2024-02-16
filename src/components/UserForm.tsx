import { useState } from 'react';
import { UserProps } from '../context/userContext.tsx';
import useUserContext from '../hooks/userHooks.ts';

function UserForm() {
  const [user, setUser] = useState<UserProps>({ name: '', email: '' });

  const { name, email } = user;

  const { handleUser } = useUserContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => {
      const newState = { ...prevState, [e.target.name]: e.target.value };
      return newState;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUser(user);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <div>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}
export default UserForm;
