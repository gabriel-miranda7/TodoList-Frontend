import React, { useState, useEffect } from 'react';
import axios from 'axios';
import checkToken from '../../utils/CheckToken';

function LoginRegisterPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering && formData.password !== formData.confirmPassword) {
        alert("A confirmação de senha não corresponde à senha. Por favor, verifique.");
        return;
      }
      try {
        let response;
        if (isRegistering) {
          response = await axios.post('http://127.0.0.1:8000/authenticate/register', formData);
        } else {
          response = await axios.post('http://127.0.0.1:8000/authenticate/login', formData);
        }

        // Armazena o token no localStorage
        localStorage.setItem('token', response.data);
        
        // Redireciona para a página inicial
        window.location.href = '/dash';
      } catch (error) {
        if(error.response && error.response.data['detail'] === 'Incorrect Password'){
          setErrorMessage("Senha incorreta.")
          return;
        }
        if(error.response && error.response.status === 404){ //Tratamento de erros HTTP
            setErrorMessage("Esse usuário não existe");
            return;
        }else if(error.response && error.response.status === 400){
            setErrorMessage("Algo está errado. Revise seus dados e tente novamente");
            return;
        }else if(error.response && error.response.status === 403){
            setErrorMessage("Alguém já está usando esse nome de usuário, Tente outro.")
            return;
        }
        console.error('Erro:', error.message);
      }
    };

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  useEffect(() => { /*Verifica se já existe token e se ele é válido, daí já envia direto pra dash
  pulando a atuenticação caso positivo */
    const checkTokenAndRedirect = async () => {
      const token = localStorage.getItem('token'); //Pega o token local do navegador
      const isValidToken = await checkToken(token); //Manda pra API para verificar
      if (isValidToken) { //Se o token é válido, manda pra dash
        window.location.href = '/dash';
      }
    };

    checkTokenAndRedirect();
  }, []);

  return (
    <div>
      <h2>{isRegistering ? 'Registro' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        {isRegistering && (
          <>
            <div>
              <label htmlFor="confirmPassword">Confirmar Senha:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
          </>
        )}
        <p>{errorMessage}</p>
        <button type="submit">{isRegistering ? 'Registrar' : 'Login'}</button>
      </form>
      <p>
        {isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?'}
        <button onClick={toggleMode}>
          {isRegistering ? 'Faça Login' : 'Registre-se'}
        </button>
      </p>
    </div>
  );
}

export default LoginRegisterPage;
