import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegisterPage from './pages/Authentication/LoginRegisterPage';
import PrivateRoutes from './utils/PrivateRoutes';
import Landing from './pages/Landing';

function AppRoutes() { //São as rotas da aplicação, privadas ou públicas
  return (
    <Routes>
      <Route path="auth" element={<LoginRegisterPage />} />
      <Route path="/" element={<Landing />} />
      <Route element={<PrivateRoutes />} >
        <Route path="dash" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
