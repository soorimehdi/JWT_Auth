
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import RoutesApp from './services/routes';
import PrivateRoutes from './services/Private-Routes';
import RestrictedRoutes from './services/Restricted-Routes';
import BaseAppBar from './components/BaseAppBar';
import Navbar from './components/Navbar';
import globalStyles from './styles/globalStyles';
import { withStyles } from '@material-ui/core';


function App(){
  return (
    <BrowserRouter>
      <Routes>
          {RoutesApp.map((route, item)=>(
          (route.rule === 'private')
          ? <Route key={item} path={route.path} element = {
              <PrivateRoutes>
                <BaseAppBar/>
                <Navbar/>
                <route.element/>
              </PrivateRoutes>} />
          : (route.rule === 'restricted')
          ? <Route key={item} path={route.path} element = {
              <RestrictedRoutes>
                <BaseAppBar/>
                <Navbar/>
                <route.element/>
              </RestrictedRoutes>}/>
          : <Route key={item} path={route.path} element = {
              <div>
                <BaseAppBar/>
                <Navbar/>
                <route.element/>
              </div>} />
        ))}
        <Route path='/*' element = {<Navigate to='/notfind' replace/>} />
      </Routes>
    </BrowserRouter>
  )
}





export default withStyles(globalStyles) (App);