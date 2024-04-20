import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import checkToken from '../../utils/CheckToken';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/axios';
import { Main } from './styled';

function SignIn() {
    const [isRegistering, setRegistering] = useState(false)
    const [rememberMe, setRemember] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    })

    useEffect(() => { /*Verifica se já existe token e se ele é válido, daí já envia direto pra dash
    pulando a atuenticação caso positivo */
    const checkTokenAndRedirect = async () => {
      const token = localStorage.getItem('token'); //Pega o token local do navegador
      const isValidToken = await checkToken(token); //Manda pra API para verificar
      if (isValidToken) { //Se o token é válido, manda pra dash
        window.location.href = '/dash';
      }else{
        localStorage.removeItem('token')
      }
    };
    

    checkTokenAndRedirect();
  }, []);

    const handleRemember = () => {
        setRemember(!rememberMe)
        let MustRemember = !rememberMe
        localStorage.setItem('mustRemember', MustRemember)
    }

    const handleToggle = () => {
        setRegistering(!isRegistering);
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({...formData, [id]: value})
        console.log(formData)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (isRegistering && formData.password !== formData.confirmPassword) {
            toast.error('As senhas não coincidem.')
            console.log('erro')
            return;
        }
        try {
            let response;
            if (isRegistering) {
                response = await axios.post('authenticate/register', formData)
            } else {
                response = await axios.post('authenticate/login', formData)
            }

            localStorage.setItem('token', response.data);
            navigate('/dash')

        } catch(error) {
            if (error.response && error.response.data['detail'] === 'Incorrect Password'){
                toast.error("Senha incorreta.");
            }
            else if(error.response && error.response.status === 404){ //Tratamento de erros HTTP
                toast.error("Esse usuário não existe");
                return;
            }else if(error.response && error.response.status === 400){
                toast.error("Algo está errado. Revise seus dados e tente novamente");
                return;
            }else if(error.response && error.response.status === 403){
                toast.error("Alguém já está usando esse nome de usuário, Tente outro.")
                return;
            }
            console.log('erro: ', error.message)
        }
    }

    return (
        <Main>
            {isRegistering === false && (
                <>
                <div className='image'>
                    <img src='images/signin3.png' alt='imagem_de_login' />
                </div>
                <div className='login'>
                    <form className='form_login'>
                        <label htmlFor='username' className='login_field'>
                            <p>Usuário</p>
                            <input 
                            type='text' 
                            id='username' 
                            value={formData.username}
                            onChange={handleChange}
                            />
                        </label>
                        <label htmlFor='password' className='login_field'>
                            <p>Senha</p>
                            <input 
                            type='text' 
                            id='password' 
                            value={formData.password}
                            onChange={handleChange}
                            />
                        </label>
                        <button onClick={handleLogin}>Fazer Login</button>
                    <div className=''>
                        <label htmlFor='checkbox' className='checkbox'>
                            <input type='checkbox' id='checkbox' onClick={handleRemember} />
                            Lembrar de mim
                        </label>
                    </div>
                    </form>
                    <div className='footer'>
                        <label htmlFor='signup' className='signup_button'>
                            Ainda não tem uma conta?
                            <button onClick={handleToggle}>Cadastre-se</button>
                        </label>
                    </div>
                </div>
                </>
            )}
            {isRegistering && (
                <>
                <div className='image'>
                    <img src='images/signin3.png' alt='imagem_de_login' />
                </div>
                <div className='login'>
                    <form className='form_login'>
                        <label htmlFor='username' className='login_field'>
                            <p>Usuário</p>
                            <input 
                            type='text' 
                            id='username' 
                            value={formData.username}
                            onChange={handleChange}
                            />
                        </label>
                        <label htmlFor='password' className='login_field'>
                            <p>Senha</p>
                            <input 
                            type='text' 
                            id='password' 
                            value={formData.password}
                            onChange={handleChange}
                            />
                        </label>
                        <label htmlFor='confirmPassword' className='login_field'>
                            <p>Confirmar senha</p>
                            <input 
                            type='text' 
                            id='confirmPassword' 
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            />
                        </label>
                        <label htmlFor='email' className='login_field'>
                            <p>Email</p>
                            <input 
                            type='text' 
                            id='email' 
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </label>
                        <button onClick={handleLogin}>Cadastrar</button>
                    </form>
                    <div className='footer'>
                        <label htmlFor='signup' className='signup_button'>
                            Já tem uma conta?
                            <button onClick={handleToggle}>Fazer login</button>
                        </label>
                    </div>
                </div>
                </>
            )}
        </Main>
    );
}

export default SignIn;