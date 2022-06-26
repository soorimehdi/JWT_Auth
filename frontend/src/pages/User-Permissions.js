import React from 'react';
import { Container, Card, Box, Grid, TextField, 
        Avatar, Typography, Divider, Select,
        MenuItem, FormControl, InputLabel
     } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const theme = createTheme({
  typography:{
    fontFamily: 'IRANYekan',
    fontSize:15
  }
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function UserPermissions(){
return(
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}> 
    <Container component="main" maxWidth='md' color='primary' sx={{mt:5}}>
        <Card variant='outlined' sx={{alignItems:'center', boxShadow:5}}>
            <Box width='100%' display='flex' alignItems='center' justifyContent='center' height={70} sx={{bgcolor:'primary.light'}}>
                <Typography variant='h5' color='white' >
                    مجوز کاربران 
                </Typography>
            </Box>
            <Box>
                <Grid container sx={{m:5}}>
                    <Grid item xs={12} sm={3}>
                        <Avatar fontSize='large' sx={{ width: 120, height: 120, m:1, bgcolor: 'primary.main' }}>
                            <AccountCircleIcon fontSize='large' sx={{ width: 130, height: 130 }}/>
                        </Avatar>
                    </Grid>
                    <Grid item xs={12} sm={9} display='flex' alignItems='center'  >
                        <Box>
                            <Typography variant='h5' align='right'>نام و نام خانوادگی</Typography>
                            <Divider/>
                            <Typography variant='subtitle1' align='right'>FirstName LastName</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container textAlign={'center'} sx={{border:'solid 1px blue', pt:10, pb:10}}>
                    <Grid item xs={12} sm ={11} >
                        <Grid container >
                            <Grid item xs={12} sm={4} >
                                <FormControl sx={{ m: 1, pr:1, minWidth: 120 }}  fullWidth>
                                    <InputLabel id="demo">groups</InputLabel>
                                    <Select
                                        variant="standard" 
                                        labelId="demo"
                                        id="demo"
                                        label="groups">
                                        <MenuItem >Administrator</MenuItem>
                                        <MenuItem >Group 1</MenuItem>
                                        <MenuItem >Group 2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl sx={{ m: 1, pr:1, minWidth: 120 }} fullWidth>
                                    <InputLabel id="1demo">Permission level</InputLabel>
                                    <Select
                                        variant="standard" 
                                        labelId="label"
                                        id="lable"
                                        label="Permission level">
                                        <MenuItem>Administrator</MenuItem>
                                        <MenuItem>Group 1</MenuItem>
                                        <MenuItem>Group 2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <FormControl sx={{ m: 1, minWidth: 120 }}  fullWidth>
                                    <TextField
                                    variant="standard" 
                                    label="last Login">
                                    </TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm ={1} display='flex' alignItems='center'>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <EditIcon fontSize='medium' color='primary'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DeleteForeverIcon fontSize='medium' color='primary'/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    </Container>
    </ThemeProvider>
    </CacheProvider>
     
)
}
export default UserPermissions;