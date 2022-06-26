import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../user-context';
import { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { Grid } from '@mui/material';

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



function BaseAppBar() {
  const { logout, user } = useContext(UserContext);
  const isAuth = user.accesstoken ? true : false;
  let Navigate = useNavigate();
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme} >
          <AppBar position="static" >
            <Toolbar>
              <Grid container>
                <Grid item xs={0.5} aligntext='right'>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ m: 0}}>
                    <MenuIcon  />
                  </IconButton>
                </Grid>
                <Grid sx={{ pt:0.7, pr:0}} item xs={11.5}>
                  <Button color="inherit" disabled={isAuth} onClick={()=> Navigate('/login')} >Login</Button>
                  <Button color="inherit" disabled={isAuth} onClick={()=> Navigate('/register')}>register</Button>
                  <Button 
                    color = 'inherit'
                    disabled={!isAuth} 
                    variant='outlined' 
                    endIcon={<LogutIcon/>} 
                    sx={{mr:2}} 
                    onClick = {logout}> logout
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default BaseAppBar;