import React, { useState } from 'react';
import { RequestLogin } from '../utils/RequestsAPI';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(email);

  const handleLogin = async () => {
    try {
      const response = await RequestLogin({ email, password });
      localStorage.setItem('authorization', JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        id="form-login"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 max-w-[550px] w-full h-[60%] rounded-lg shadow-[0px_0px_15px_5px_rgba(255,255,255,0.2)]"
      >
        <h1 id="title-login" className="text-3xl font-semibold text-center mb-6">
          Desafio ToDoList
        </h1>
        
        <label htmlFor="input-login-email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
          <input
            type="email"
            name="input-login"
            id="input-login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="brace.lee@exemplo.com"
            className="mt-1 block w-full px-4 py-2 rounded-lg ${isEmailValid ? 'border-green-500' : 'border-red-500'} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        
        <label htmlFor="input-login-password" className="block text-sm font-medium text-gray-700 mb-2">
          Senha
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="input-login-password"
              id="input-login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="brucelee123"
              className="mt-1 block w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-500"
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
            </button>
          </div>
        </label>

        <div id="buttons-login" className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Entrar
          </button>
          <button
            type="button"
            className="w-full py-2 border-2 border-gray-300  rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Registrar-se
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;