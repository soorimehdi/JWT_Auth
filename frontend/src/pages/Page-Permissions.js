import * as React from 'react';
import RoutesApp from '../services/routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Container, Card, Box, Checkbox, TextField, Grid, 
  Paper, Table, TableContainer, TableHead, TableRow, 
  TableCell, TableBody, Button} from '@mui/material';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'viwe', headerName: 'Viwe', width: 130 },
  { field: 'add', headerName: 'Add', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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

export default function PagePermissions() {
  const [headData, setHeadData] = React.useState([
    {name:'viwe', label:'نمایش', value: false},
    {name:'insert', label:'درج', value: false},
    {name:'update', label:'ویرایش', value: false},
    {name:'delete', label:'حذف', value: false}
  ])
  
  const [indeterminate, setIndeterminate] = React.useState({
    viwe: false,
    insert: false,
    update: false,
    delete: false
  });

  const handleChangeGroupCheckbox =(e)=>{
    let name = e.target.name;
    let findName  = headData.find(item=>{ return item.name===name});
    let changeValue = !findName.value;
    if(changeValue){
      setIndeterminate({
        [name]:false
      })
    }
    setHeadData(
      headData.map(item=> item.name === name 
      ? ({...item, value: changeValue}) 
      : item)
      )
  }

  return (
    <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}> 
            <Container component="main" maxWidth="md">
              <Card variant='outlined' sx={{
              mt:5, 
              padding:3, 
              boxShadow:1
              }}>
                <Paper>
                  <Grid container >
                    <Grid item xs={12} sm={6} sx={{border:'1px solid red'}}>combobox</Grid>
                    <Grid item xs={12} sm={6}sx={{border:'1px solid red'}}>dense</Grid>
                  </Grid>
                  <Grid container sx={{border:'1px solid red'}}>
                    <Grid item xs={12} sm={12}>
                      <TableContainer>
                        <Table>
                          
                          <TableHead >
                            <TableRow sx = {{}}>
                              <TableCell sx={{border:'1px solid gray'}}>pages</TableCell>
                              {headData.map((item, index)=>{
                                return(
                                  <TableCell 
                                  key={index} 
                                  vlaue={item.name}
                                  sx={{border:'1px solid gray', width:130}}
                                  >
                                      {item.label}
                                      <Checkbox 
                                      indeterminate={indeterminate[item.name]}
                                      name = {item.name}
                                      checked = {item.value}
                                      onChange = {handleChangeGroupCheckbox}
                                      />
                                  </TableCell>
                                )
                              })}
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            {RoutesApp.map((route, index)=>{
                              return(
                                <TableRow key={index} sx={{border:'1px solid gray'}}>
                                    <TableCell key={index} value={route.path}>{route.name} </TableCell>
                                    <TableCell><Checkbox/></TableCell>
                                    <TableCell><Checkbox/></TableCell>
                                    <TableCell><Checkbox/></TableCell>
                                    <TableCell><Checkbox/></TableCell>
                                </TableRow>
                              )
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Paper>
                <Box textAlign={'center'}>
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                    >
                      submit</Button>
                  </Box>
              </Card>
            </Container>
        </ThemeProvider>
      </CacheProvider>
  );
}