import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';
import AppRoutes from './routes';

function App() { 
  return (
    <div className='App'>
      <Router>
        <AppRoutes/>
      </Router>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
