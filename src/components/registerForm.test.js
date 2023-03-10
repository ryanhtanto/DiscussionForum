/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/**
 * test scenario for registrationForm
 *
 * - registrationForm Components
 *  - should handle name typing correctly
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should call register function when register button is clicked
 *
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterForm from './registerForm';

import '@testing-library/jest-dom';

describe('RegisterForm component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterForm register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');

    // Action
    await userEvent.type(nameInput, 'usernametest');

    // Assert
    expect(nameInput).toHaveValue('usernametest');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterForm register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'usernametest@gmail.com');

    // Assert
    expect(emailInput).toHaveValue('usernametest@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(<RegisterForm register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'passwordtest');

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const mockRegis = jest.fn();
    render(<RegisterForm register={mockRegis} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'usernametest');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'usernametest@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Submit' });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockRegis).toBeCalledWith({
      name: 'usernametest',
      email: 'usernametest@gmail.com',
      password: 'passwordtest',
    });
  });
});
