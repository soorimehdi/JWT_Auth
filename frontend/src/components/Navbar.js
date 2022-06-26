import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  direction:'rtl',
  typography: {
      fontFamily:'IRANYekan',
      fontSize:14,
      fontWeight: 700
  },
});

export default function Navbar() {
  let Navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{height:42}} position="static" color='inherit'>
        <Toolbar variant="dense" position='center'>
          <HomeIcon sx={{pt:0}} color="primary" fontSize='large' onClick={()=>Navigate('/')}/>
          <Button sx={{pt:0}} color="primary" onClick={()=> Navigate('/personal')} >داشبورد</Button>
          <Button sx={{pt:0}} color="primary"onClick={()=> Navigate('/accounts')}>مدیریت دسترسی</Button>
          <Button sx={{pt:0}} color="primary" onClick={()=> Navigate('/userpermissions')}>سطح دسترسی</Button>
          <Button sx={{pt:0}} color="primary" onClick={()=> Navigate('/personal/checkout')}>فرم آدرس</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}