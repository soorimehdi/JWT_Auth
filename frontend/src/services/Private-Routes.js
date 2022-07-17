import { Navigate } from 'react-router-dom';
import { UserContext } from '../user-context';
import { useContext } from 'react';
import Cookies from 'js-cookie';

function PrivateRoutes({children}){
    const {user} = useContext(UserContext);
    const token = Cookies.get('user');
    return (user.accesstoken || token) ? children : <Navigate to= '/login' /> 
    
}
export default PrivateRoutes;