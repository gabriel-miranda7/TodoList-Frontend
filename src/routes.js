import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import LoginRegisterPage from './pages/Authentication/LoginRegisterPage';
import PrivateRoutes from './utils/PrivateRoutes';
import SignIn from './pages/SignIn';

function AppRoutes() { //São as rotas da aplicação, privadas ou públicas
  return (
    <Routes>
      <Route path="auth" element={<SignIn />} />
      <Route path="/" element={<SignIn />} />
      <Route element={<PrivateRoutes />} >
        <Route path="dash" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
