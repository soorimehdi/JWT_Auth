import * as React from 'react';
import RoutesApp from '../services/routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Container, Card, Box, Checkbox, Grid, 
  Paper, Table, TableContainer, TableHead, TableRow, Typography,
  TableCell, TableBody, Button, FormControlLabel, Switch, TableFooter, TablePagination} from '@mui/material';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { blue } from '@mui/material/colors';
import TablePaginationActions from '../components/Pageination'


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
  const border = '1px solid gray';
  const paths = RoutesApp.filter(item=>item.rule!=='restricted').map(item=>item.path);
  let RoutesLength = paths.length;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dense, setDense] = React.useState(true);
  
  // get data 
  const selectData = [
    {roule:'owner'},
    {roule: 'administrator'},
    {roule:'group 1'},
  ];

  

  const [checkedBox, setCheckedBox] = React.useState([
    {name: 'viwe', value: Array(RoutesLength).fill(false)},
    {name: 'insert', value: Array(RoutesLength).fill(false)},
    {name: 'update', value: Array(RoutesLength).fill(false)},
    {name: 'delete', value: Array(RoutesLength).fill(false)}
  ]);
  
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

  const handleChangeGroupCheckbox = e =>{
    let name = e.target.name;
    let findName  = headData.find(item=>{ return item.name===name});
    let changeValue = !findName.value;
    if(changeValue){
      setIndeterminate({
        ...indeterminate,
        [name]:false
      })
      setCheckedBox(
        checkedBox.map(item=>item.name === name
          ?({...item, value: Array(RoutesLength).fill(true)})
          : item)
      )
    } else{
      setCheckedBox(
        checkedBox.map(item=>item.name === name
          ?({...item, value: Array(RoutesLength).fill(false)})
          : item)
      )
      setIndeterminate({
        ...indeterminate,
        [name]:false
      })
    }
    setHeadData(
      headData.map(item=> item.name === name 
      ? ({...item, value: changeValue}) 
      : item)
      )
  }

  const handleChageCheckbox = e =>{
    let name = e.target.name;
    let index = Number(e.target.value);
    let values = checkedBox.find(item=>{return item.name === name}).value;
    let value = values[index];
    let newArray = values;
    newArray[index]=!value;
    let some = newArray.some(item=>item===true);
    let every = newArray.every(item=>item===true);
    if(some && every){
      setIndeterminate({
        ...indeterminate,
        [name]: false
      })
      setHeadData(
        headData.map(item=> item.name === name 
          ? ({...item, value: true}) 
          : item)
      )
    }else if (some && !every){
      setIndeterminate({
        ...indeterminate,
        [name]: true
      })
    } else {
      setHeadData(
        headData.map(item=> item.name === name 
          ? ({...item, value: false}) 
          : item)
      )
      setIndeterminate({
        ...indeterminate,
        [name]: false
      })
    }
    setCheckedBox(
      checkedBox.map(item=> item.name === name
        ? ({...item, value: newArray})
        : item)
    )  
  };

  const handleSubmitForm = (e)=>{
    let _viwe = checkedBox.find(item=> item.name==='viwe').value;
    let _insert = checkedBox.find(item=> item.name==='insert').value;
    let _update = checkedBox.find(item=> item.name==='update').value;
    let _delete = checkedBox.find(item=> item.name==='delete').value;
    let viweLink = [];
    let insertLink = [];
    let updateLink = [];
    let deleteLink = [];
    for (let i = 0; i < RoutesLength; i++){
      if(_viwe[i]===true){
        viweLink.push(paths[i]);
      }
      if(_insert[i]===true){
        insertLink.push(paths[i]);
      }
      if(_update[i]===true){
        updateLink.push(paths[i]);
      }
      if(_delete[i]===true){
        deleteLink.push(paths[i]);
      }
    }
    console.log('viwe:',viweLink, 'insert:', insertLink, 'updatd:', updateLink, 'delete:', deleteLink);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}> 
        <Container component="main" maxWidth="md" sx={{mt:7}}>
          <Card variant='outlined' sx={{alignItems:'center', boxShadow:2}}>
            <Box width='100%' display='flex' alignItems='center' 
            justifyContent='center' height={70} sx={{bgcolor:'primary.light'}}>
              <Typography variant='h5' color='white' >
                  مجوز کاربران 
              </Typography>
            </Box>

            <Paper sx={{pl:3, pr:3}}>
              <Grid container sx={{pt:3}} >
                <Grid item xs={12} sm={6} align='right' sx={{mb:2}}>
                  <select
                  style={{borderRadius:5, height:40, width:320, backgroundColor:blue[50]}}
                  >
                    {selectData.map((item, index)=>{
                      return(
                        <option key={index} vlaue={item.roule}>{item.roule}</option>
                      )
                    })}
                  </select>
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                  control={<Switch checked={dense} 
                  onChange={e => setDense(e.target.checked)} />}
                  label={dense ? 'فشرده': 'عادی'}
                  />
                </Grid>
              </Grid>
              <Grid container >
                <Grid item xs={12} sm={12}>
                  <TableContainer>
                    <Table
                    sx={{ minWidth: 750 }} 
                    size={dense ? 'small' : 'medium'}>
                      <TableHead >
                        <TableRow sx = {{bgcolor:blue[50]}}>
                          <TableCell sx={{border:'1px solid gray'}}>pages</TableCell>
                          {headData.map((item, index)=>{
                            return(
                              <TableCell
                              key={index} 
                              vlaue={item.name}
                              align='right'
                              sx={{border:border , width:120}}
                              >
                                {item.label}
                                <Checkbox 
                                indeterminate={indeterminate[item.name]}
                                name = {item.name}
                                checked = {item.value}
                                onChange = {handleChangeGroupCheckbox}
                                sx={{padding:0}}
                                />
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {RoutesApp.filter(item=>item.rule !=='restricted')
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((route, index)=>{
                          return(
                            <TableRow key={index}>
                              <TableCell key={index} value={route.path} sx={{border:border}}>
                                {route.name} 
                              </TableCell>
                                {checkedBox.map((item, idx)=>{
                                  return(
                                    <TableCell key={idx} align='right' sx={{border:border}}>
                                    <Checkbox sx={{padding:0}}
                                    name = {item.name}
                                    value = {index}
                                    checked = {item.value[index]}
                                    onChange = {handleChageCheckbox}
                                    />
                                    </TableCell>
                                  )
                                })}
                            </TableRow>
                          )
                        })}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TablePagination 
                          labelRowsPerPage={<Box component={'span'} display='flex' sx={{pt:1.7}}>نمایش رکوردها</Box>}
                          rowsPerPageOptions={[{label:'همه', value: RoutesLength},5,10,25]}
                          colSpan={5}
                          count={RoutesLength}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          SelectProps={{
                            native: true}}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                          ActionsComponent={TablePaginationActions}
                          labelDisplayedRows={({ from, to, count }) => ''}
                          />
                        </TableRow>
                      </TableFooter>
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
              onClick={handleSubmitForm}
              >
                ثبت اطلاعات</Button>
            </Box>
          </Card>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}