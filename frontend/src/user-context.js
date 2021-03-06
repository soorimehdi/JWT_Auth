import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const UserContext = createContext([]);


//AXIOS INSTANCE
const axiosInstance = axios.create({
    baseURL : 'http://localhost:4000',
});


const UserProvider = ({children}) => {
    const [user, setUser] = useState('');
    
    const readCookie = ()=>{
        const currentUser = Cookies.get('user');
        setUser({accesstoken:currentUser}); 
    }
    
    useEffect(() => {
        readCookie();  
    }, [])
    
    const register = async(email, password) => {
        try {
            const response = await axiosInstance.post('/register', 
            JSON.stringify({ email, password }),
            { 
                headers:{
                    'Content-Type': 'application/json'
                },
                withCredentials:false
            });
            console.log(response.data);
        } catch(err){
            if (!err.response){
                console.log("no server respose")
            } else {
                console.log('Registaration Failed')
            }
        }
    };


    const login = async (email, password) => {
        try {
            const response = await axiosInstance.post('/login', 
            JSON.stringify({ email, password }),
            { 
                headers:{
                    'Content-Type': 'application/json'
                },
                withCredentials:false
            });
            if(response.data.accesstoken){
                setUser({
                    accesstoken: response.data.accesstoken,
                });
                Cookies.set('user',response.data.accesstoken,{expires: 7, path:''});
            }
            
        } catch(err){
            if (!err.response){
                console.log("no server respose")
            } else {
                console.log('login Failed')
            }
        }
    }

        
    const logout = async() => {
        try {
            await axiosInstance.post('/logout', 
            JSON.stringify({}),
            { 
                headers:{'Content-Type': 'application/json'},
                withCredentials:false
            });
            setUser('');
            Cookies.remove('user');
        }
        catch(err){
            if(!err.response){
                console.log('no server response')
            } else {
                console.log('logout Failed')
            }
        }
    }

    return (
        <UserContext.Provider value={{user, setUser, login, logout, register}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;