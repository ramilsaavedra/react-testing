import { screen, render, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm.tsx';

test('it show two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls on handleSubmit', async () => {
  const mockSubmit = jest.fn();

  render(<UserForm />);

  screen.logTestingPlaygroundURL();

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const form = screen.getByRole('form');
  form.onsubmit = mockSubmit;

  user.click(nameInput);
  user.keyboard('jane');

  user.click(emailInput);
  user.keyboard('jane@jane.com');

  fireEvent.submit(form);

  expect(mockSubmit).toHaveBeenCalled();
});
