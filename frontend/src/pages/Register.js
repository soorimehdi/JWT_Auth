import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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



const Register = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const { register } = React.useContext(UserContext);

    const handleSubmit = async e => {
        e.preventDefault();
        if(email==null){
            alert('email is empty')
        }else if(password !=null && password === confirmPassword){
            register(email, password);
            alert('user Created');
        }
        else{
            alert('password and confirm password is not equal')
        }
    }

    return (
        <CacheProvider value={cacheRtl}> 
            <ThemeProvider theme={theme}> 
            <Container component="main" maxWidth="sm">
                
                    <Card variant='outlined' sx={{
                        mt:5,
                        alignItems:'center',
                        padding:3, 
                        boxShadow:5,

                        }}>
                        <Box sx={{
                            marginTop: 5,
                            marginBottom: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Avatar sx={{ m:1, bgcolor: 'primary.main' }}>
                            <PersonAddIcon fontSize='medium' />
                        </Avatar>
                        <Typography component="h1" variant="h4">
                            REGISTER
                        </Typography>
                        
                        <Box dir='ltr' component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                            <TextField
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
                
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="تکرار رمز ورود"
                            type="password"
                            id="confirmPassword"
                            autoComplete="current-password"
                            value={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)}
                            />
                            
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 3 }}
                            value = "login">
                            ثبت نام
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href='/login' variant="body2">
                                    {"می خواهید وارد شوید؟ ورود کاربران"}
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

export default Register;


