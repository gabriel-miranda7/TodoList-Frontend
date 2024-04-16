import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import AppRoutes from './routes';

function App() { 
  return (
    <div className='App'>
      <Router>
        <AppRoutes/>
      </Router>
      <GlobalStyles />
    </div>
  );
}

export default App;
