import { Navigate } from 'react-router-dom';
import { UserContext } from '../user-context';
import { useContext } from 'react';

function RestrictedRoutes({children}){
    const {user} = useContext(UserContext);
    return !user.accesstoken ? children : <Navigate to ='/'/>   
}

export default RestrictedRoutes;