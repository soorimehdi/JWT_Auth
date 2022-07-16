
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import RoutesApp from './services/routes';
import PrivateRoutes from './services/Private-Routes';
import RestrictedRoutes from './services/Restricted-Routes';
import Sidebar from './components/sidebar/Sidebar';
import globalStyles from './styles/globalStyles';
import { withStyles } from '@material-ui/core';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  direction:'rtl',
  typography:{
    fontSize:13
  }
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})


// function App(){
//   return (
//     <BrowserRouter>
//       <Routes>
//           {RoutesApp.map((route, item)=>(
//           (route.rule === 'private')
//           ? <Route key={item} path={route.path} element = {
//               <PrivateRoutes>
//                 <BaseAppBar/>
//                 <Navbar/>
//                 <route.element/>
//               </PrivateRoutes>} />
//           : (route.rule === 'restricted')
//           ? <Route key={item} path={route.path} element = {
//               <RestrictedRoutes>
//                 <BaseAppBar/>
//                 <Navbar/>
//                 <route.element/>
//               </RestrictedRoutes>}/>
//           : <Route key={item} path={route.path} element = {
//               <div>
//                 <BaseAppBar/>
//                 <Navbar/>
//                 <route.element/>
//               </div>} />
//         ))}
//         <Route path='/*' element = {<Navigate to='/notfind' replace/>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }


function App(){
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme} >
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
    </ThemeProvider>
    </CacheProvider>
  )
}


export default withStyles(globalStyles) (App);