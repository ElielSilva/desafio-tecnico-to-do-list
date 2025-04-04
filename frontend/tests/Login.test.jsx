import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest'
import { vi } from 'vitest'
import { BrowserRouter} from 'react-router-dom';
import Login from '../src/pages/Login';
import { RequestLogin } from '../src/utils/RequestsAPI';

vi.mock("../src/utils/RequestsAPI", () => ({
  RequestLogin: vi.fn().mockResolvedValue({ token: "mocked_token" }),
}));


describe('test componets login',() => {
  test('renders the email and password, labal and input fields', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const titleElement = screen.getByTestId('login-title');
    const labelEmailElement= screen.getByTestId('label-login-email');
    const inputEmailElement = screen.getByTestId('input-login-email');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Desafio ToDoList');
  
    expect(labelEmailElement).toBeInTheDocument();
    expect(labelEmailElement).toHaveTextContent('Email');
  
    expect(inputEmailElement).toBeInTheDocument();
  });

  test('updates email and password fields on change', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("input-login-email");
    fireEvent.change(emailInput, {
      target: { value: "test@example.com" }
    });
    const passwordInput = screen.getByTestId("input-login-password");
    fireEvent.change(passwordInput, {
      target: { value: "password123" }
    });
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });
  
  test('shows and hides password on button click', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const passwordInput = screen.getByTestId("input-login-password");
    const togglePasswordButton = screen.getByTestId('button-login-password-show');
    expect(passwordInput.type).toBe('password');
    fireEvent.click(togglePasswordButton);
    expect(passwordInput.type).toBe('text');
    fireEvent.click(togglePasswordButton);
    expect(passwordInput.type).toBe('password');
  });

  test('submits login form on successful login', async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  
    const inputEmailElement = screen.getByTestId('input-login-email');
    const passwordInput = screen.getByTestId("input-login-password");
    fireEvent.change(inputEmailElement, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
  
    const loginButton = screen.getByText(/Entrar/i);
    fireEvent.click(loginButton);
  
    await waitFor(() => {
      expect(RequestLogin).toHaveBeenCalledTimes(1);
      expect(JSON.parse(localStorage.getItem('Authorization'))).toBe("mocked_token");
      // expect(navigate).toHaveBeenCalledWith('/home');
    });
  });
});
