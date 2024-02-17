import { screen, render } from '@testing-library/react';
import UserList from './UserList.tsx';
import UserContext, { UserProps } from '../context/userContext.tsx';

function renderUserList(data: UserProps[]) {
  render(
    <UserContext.Provider value={{ users: data, handleUser: () => {} }}>
      <UserList />
    </UserContext.Provider>,
  );
}

test('show no users when users is empty', () => {
  renderUserList([]);

  const noUsers = screen.getByText(/no users/i);

  expect(noUsers).toBeInTheDocument();
});

test('show the 2 users name and email', () => {
  const mockData = [
    {
      name: 'jet',
      email: 'jet@jet.com',
    },
    {
      name: 'ruther',
      email: 'ruther@email.com',
    },
  ];

  renderUserList(mockData);

  const userItem = screen.getAllByRole('listitem');

  expect(userItem).toHaveLength(2);
});
