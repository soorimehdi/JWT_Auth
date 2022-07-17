
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import RoutesApp from './services/routes';
import PrivateRoutes from './services/Private-Routes';
import RestrictedRoutes from './services/Restricted-Routes';
import Sidebar from './components/sidebar/Sidebar';
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
                <Sidebar>
                  <route.element/>
                </Sidebar>
              </PrivateRoutes>
            } />
          : (route.rule === 'restricted')
          ? <Route key={item} path={route.path} element = {
              <RestrictedRoutes>
                <Sidebar>
                    <route.element/>
                </Sidebar>
              </RestrictedRoutes>
            }/>
          : <Route key={item} path={route.path} element = {
            <Sidebar>
              <route.element/>
            </Sidebar>}/>
        ))}
        <Route path='/*' element = {<Navigate to='/notfind' replace/>} />
      </Routes>
    </BrowserRouter>

  )
}


export default withStyles(globalStyles) (App);