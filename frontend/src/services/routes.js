import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from '../pages/Home-page';
import AccountsManagementPage from "../pages/Accounts-Management-Page";
import PersonalInformation from "../pages/Personal-Information-Page";
import UserPermissions from "../pages/User-Permissions";
import AddressForm from "../pages/PersonalInformation/AddressForm";
import Checkout from "../pages/PersonalInformation/Checkout";
import PagePermissions from '../pages/Page-Permissions';



const RoutesApp = [
    {
        name: 'Login Page',
        path:'/login',
        element: Login,
        rule: 'restricted',
        authRequired: false,
        
    },
    {
        name: 'Register Page',
        path:'/register',
        element: Register,
        rule: 'restricted',
        authRequired: false

    },
    {
        name:'Home Page',
        path:'/',
        element: Homepage,
        rule: 'public',
        authRequired: false

    },
    {
        name:'Home Page',
        path:'/homepage',
        element: Homepage,
        rule: 'public',
        authRequired: false

    },
    {
        name: 'Personal Page',
        path:'/personal',
        element: PersonalInformation,
        rule: 'private',
        authRequired: true
    },
    {
        name: 'Accounts Management Page',
        path:'/accounts',
        element: AccountsManagementPage,
        rule: 'private',
        authRequired: true,
        permissions:['owner']

    },
    {
        name:'User Permissions Page',
        path:'/userpermissions',
        element: UserPermissions,
        rule:'private',
        authRequired: true,
        permissions:['owner, administrator']
    },
    {
        name:'page Permissions',
        path:'/pagepermissions',
        element: PagePermissions,
        rule:'private',
        authRequired: true,
        permissions:['owner, administrator']
    },
    {
        name:'Address Form',
        path:'/personal/addressform',
        element: AddressForm,
        rule:'private',
        authRequired: true,
        permissions:['owner, administrator']
    },
    {
        name:'Checkout Form',
        path:'/personal/checkout',
        element: Checkout,
        rule:'private',
        authRequired: true,
        permissions:['owner, administrator']
    },
    {
        name:'Not Find Page',
        path:'/notfind',
        element: ()=><h1>this page dose not exist</h1>,
        rule:'public',
        authRequired: false,
    },


];


export default RoutesApp;