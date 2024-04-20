import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';
import AppRoutes from './routes';

function App() { 

  useEffect(() => {
    // Verificar se há um token de acesso no localStorage quando o componente é montado
    const token = localStorage.getItem('token');
    const mustRemember = localStorage.getItem('mustRemember');
    // Adicionar um event listener para o evento 'beforeunload' que é disparado antes da página ser fechada
    const handleBeforeUnload = () => {
      console.log('Página fechada');
      
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Remover o event listener quando o componente for desmontado para evitar vazamentos de memória
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
