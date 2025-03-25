import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="caminho/para/foto.jpg"
            alt="Foto do usuário"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-white">name</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="/perfil" className="text-white">Perfil</a>
          <button
            onClick={() => logout()}
            className="text-white"
          >
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
