/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './loginForm';

import '@testing-library/jest-dom';

describe('LoginForm component', () => {
  it('should handle username typing correctly', async () => {
    // Arrange
    render(<LoginForm login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'usernametest@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('usernametest@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(<LoginForm login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'passwordtest');

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = jest.fn();
    render(<LoginForm login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'usernametest@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Submit' });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'usernametest@gmail.com',
      password: 'passwordtest',
    });
  });
});
