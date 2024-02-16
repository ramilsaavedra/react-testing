import { screen, render } from '@testing-library/react';
import UserList from './UserList.tsx';

test('show no users when users is empty', () => {
  render(<UserList />);

  const noUsers = screen.getByText(/no users/i);

  expect(noUsers).toBeInTheDocument();
});
