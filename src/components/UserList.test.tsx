import { screen, render } from '@testing-library/react';
import UserList from './UserList.tsx';

test('show no users when users is empty', () => {
  const { container } = render(<UserList />);

  const usersList = container.querySelector('div > div');

  const noUsers = screen.getByText(/no users/i);

  expect(noUsers).toBeInTheDocument();
  expect(usersList).toBeInTheDocument();
});
