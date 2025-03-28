import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest'
import { vi } from 'vitest'
import { BrowserRouter} from 'react-router-dom';
import App from '../src/App';
import Register from '../src/pages/Register';
import { RequestRegister } from '../src/utils/RequestsAPI';

vi.mock('../src/utils/RequestsAPI', () => ({
  RequestRegister: vi.fn().mockResolvedValue({ token: "mocked_token" }),
}));

test('resgister - renders the email and password. labal, input and button fields ', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const titleElement = screen.getByTestId('register-title');
  const labelNameElement= screen.getByTestId('label-register-name');
  const labelEmailElement = screen.getByTestId('label-register-email');
  const labelPasswordElement = screen.getByTestId('label-register-password');
  const labelPasswordConfirmElement = screen.getByTestId('label-register-password-confirm');

  const inputNameElement = screen.getByTestId('input-register-name');
  const inputEmailElement = screen.getByTestId('input-register-email');
  const inputPasswordElement = screen.getByTestId('input-register-password');
  const inputPasswordConfirmElement = screen.getByTestId('input-register-password-confirm');

  const buttonRegisterElement = screen.getByTestId('button-register');
  const buttonRedirectLoginConfirmElement = screen.getByTestId('button-redirect-login');

  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent('Desafio ToDoList');

  expect(labelNameElement).toBeInTheDocument();
  expect(labelNameElement).toHaveTextContent('Nome');
  
  expect(labelEmailElement).toBeInTheDocument();
  expect(labelEmailElement).toHaveTextContent('Email');
  
  expect(labelPasswordElement).toBeInTheDocument();
  expect(labelPasswordElement).toHaveTextContent('Senha');
  
  expect(labelPasswordConfirmElement).toBeInTheDocument();
  expect(labelPasswordConfirmElement).toHaveTextContent('Confirme sua Senha');
  
  expect(buttonRegisterElement).toBeInTheDocument();
  expect(buttonRegisterElement).toHaveTextContent('Registrar-se');
  
  expect(buttonRedirectLoginConfirmElement).toBeInTheDocument();
  expect(buttonRedirectLoginConfirmElement).toHaveTextContent('Ir para Entrar');

  expect(inputNameElement).toBeInTheDocument();
  expect(inputEmailElement).toBeInTheDocument();
  expect(inputPasswordElement).toBeInTheDocument();
  expect(inputPasswordConfirmElement).toBeInTheDocument();
});

test('updates email and password fields on change', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  const inputNameElement = screen.getByTestId('input-register-name');
  const inputEmailElement = screen.getByTestId('input-register-email');
  const inputPasswordElement = screen.getByTestId('input-register-password');
  const inputPasswordConfirmElement = screen.getByTestId('input-register-password-confirm');

  fireEvent.change(inputNameElement, {
    target: { value: "test" }
  });
  expect(inputNameElement.value).toBe('test');

  fireEvent.change(inputEmailElement, {
    target: { value: "test@example.com" }
  });
  expect(inputEmailElement.value).toBe('test@example.com');

  fireEvent.change(inputPasswordElement, {
    target: { value: "password123" }
  });
  expect(inputPasswordElement.value).toBe('password123');
  
  fireEvent.change(inputPasswordConfirmElement, {
    target: { value: "password123" }
  });
  expect(inputPasswordConfirmElement.value).toBe('password123');
  expect(inputPasswordConfirmElement.value).toBe(inputPasswordElement.value);
});

test('shows and hides password on button click', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const inputPasswordElement = screen.getByTestId('input-register-password');
  const inputPasswordConfirmElement = screen.getByTestId('input-register-password-confirm');
  const togglePasswordButton = screen.getByTestId('button-register-password-show');
  
  expect(inputPasswordElement.type).toBe('password');
  expect(inputPasswordConfirmElement.type).toBe('password');

  fireEvent.click(togglePasswordButton);
  expect(inputPasswordElement.type).toBe('text');
  expect(inputPasswordConfirmElement.type).toBe('text');
  
  fireEvent.click(togglePasswordButton);
  expect(inputPasswordElement.type).toBe('password');
  expect(inputPasswordConfirmElement.type).toBe('password');
});

test('submits login form and navigates to home on successful login', async () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );

  const inputNameElement = screen.getByTestId('input-register-name');
  const inputEmailElement = screen.getByTestId('input-register-email');
  const inputPasswordElement = screen.getByTestId('input-register-password');
  const inputPasswordConfirmElement = screen.getByTestId('input-register-password-confirm');
  const buttonRegisterElement = screen.getByTestId('button-register');

  fireEvent.change(inputNameElement, { target: { value: 'test' } });
  fireEvent.change(inputEmailElement, { target: { value: 'test@example.com' } });
  fireEvent.change(inputPasswordElement, { target: { value: 'password123' } });
  fireEvent.change(inputPasswordConfirmElement, { target: { value: 'password123' } });
  fireEvent.click(buttonRegisterElement)

  

  await waitFor(() => {
    expect(RequestRegister).toHaveBeenCalledTimes(1);
    expect(JSON.parse(localStorage.getItem('Authorization'))).toBe("mocked_token");
    // expect(navigate).toHaveBeenCalledWith('/home'); // Verifique se a navegação foi para a página corret
  });
});