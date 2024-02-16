import { screen, render } from '@testing-library/react';
// import user from '@testing-library/user-event';
import UserForm from './UserForm.tsx';

test('it show two inputs and a button', () => {
  // render the component
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
