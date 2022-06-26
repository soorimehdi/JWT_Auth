import { UserContext } from '../user-context';
import { useContext, useEffect, useState } from 'react';


function PersonalInformation(){
    const {user} = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState('');
    useEffect(()=>{
        setCurrentUser({accesstoken:user.accesstoken})
    },[user])
    return(
    <div>
        <h1>access token {currentUser.accesstoken} </h1>
        <h1>rule page is private</h1>
    </div>
    )
    
}

export default PersonalInformation;