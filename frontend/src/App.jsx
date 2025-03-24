// import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
