import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegisterPage from './pages/LoginRegisterPage';
import PrivateRoutes from './utils/PrivateRoutes';

function AppRoutes() {
  return (
    <Routes>
      <Route path="auth" element={<LoginRegisterPage />} />
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoutes/>}>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
