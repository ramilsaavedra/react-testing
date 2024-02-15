import { useState } from 'react';

type UserProps = {
  name: string;
  email: string;
};

function UserForm() {
  const [user, setUser] = useState<UserProps>({ name: '', email: '' });

  const { name, email } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => {
      const newState = { ...prevState, [e.target.name]: e.target.value };
      return newState;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Name
          <input
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            type="text"
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
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}
export default UserForm;
