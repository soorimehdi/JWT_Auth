import { Navigate } from 'react-router-dom';
import { UserContext } from '../user-context';
import { useContext } from 'react';

function PrivateRoutes({children}){
    const {user} = useContext(UserContext);
    return user.accesstoken ? children : <Navigate to= '/login' /> 
}
export default PrivateRoutes;