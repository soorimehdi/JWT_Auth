import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserContext } from "../user-context";

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const theme = createTheme({
  direction:'rtl',
  typography:{
    fontFamily: 'IRANSans',
    fontSize:15
  }
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { login }= React.useContext(UserContext);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        login(email, password);
    };
 
    return (
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}> 
            <Container component="main" maxWidth="sm">
              <Card variant='outlined' sx={{
                mt:5, 
                padding:3, 
                boxShadow:5
                }}>
              <Box
                sx={{
                  marginTop: 5,
                  marginBottom: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Avatar sx={{ m:1, bgcolor: 'primary.main' }}>
                  <LockOutlinedIcon fontSize='medium'/>
                </Avatar>
                <Typography component="h1" variant="h4">
                  ورود کاربران
                </Typography>
                
                <Box dir='ltr' component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                  <TextField
                    variant='outlined'
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="ایمیل"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                  />
                  <TextField
                    variant='outlined'
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="رمز ورود"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                  />
                  {/* <FormControlLabel
                    direction='right'
                    control={<Checkbox value="remember" color="primary" />}
                    label="مرا به خاطر بسپار"
                  /> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                    value = "login">
                    ورود
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                      رمز را فراموش کرده اید؟
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/register" variant="body2">
                        {"حساب کاربری ندارید؟ ثبت نام کنید"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              </Card>
            </Container>
        </ThemeProvider>
      </CacheProvider>
    );
}

export default Login;




