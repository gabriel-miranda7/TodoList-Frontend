import { Navigate, Outlet } from 'react-router-dom'
import checkToken from './CheckToken';


const PrivateRoutes = ({children, ...rest}) => {
    const token = localStorage.getItem('token');

    if (!token) { //Se não tiver token, redireciona pra página de autenticação
        return <Navigate to='/auth'/>;
    }

    let response = checkToken(token) // Checa se o token já existe e verifica sua validade na API

    return(
        response ? <Outlet/> : <Navigate to='/auth'/>  //Caso seja válido renderiza a página children
    )
}

export default PrivateRoutes;