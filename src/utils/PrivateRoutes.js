import { Navigate, Outlet } from 'react-router-dom'
import axios from 'axios'

const PrivateRoutes = ({children, ...rest}) => {
    let auth = {'token' : false}
    return(
        auth.token ? <Outlet/> : <Navigate to='/auth'/> 
    )
}

export default PrivateRoutes