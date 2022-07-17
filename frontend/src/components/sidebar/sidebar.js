import { useState, useContext } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Grid, Button, Box } from '@mui/material';
import LogutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import useStyles from '../../styles/sidebarStyles';
import { UserContext } from '../../user-context';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';
import SubMenuIcons from './SubMenuIcons'
import { Divider } from "@material-ui/core";



const Sidebar = ({children}) => {
  const { logout, user } = useContext(UserContext);
    const isAuth = user.accesstoken ? true : false;
    let classes = useStyles();
    let Navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  return (
    
      
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setIsOpened(!isOpened)}
            className={classes.icon}>
            {isOpened ? <ChevronRightIcon /> : <MenuIcon />}
          </IconButton>

          <Grid container>
            <Grid sx={{ ml:2}} item xs={12} textAlign={'left'}>
                <Button sx={{color:'white'}} disabled={isAuth} onClick={()=> Navigate('/login')} >Login</Button>
                <Button sx={{color:'white'}} disabled={isAuth} onClick={()=> Navigate('/register')}>register</Button>
                <Button 
                    disabled={!isAuth} 
                    variant='outlined' 
                    color='inherit'
                    endIcon={<LogutIcon sx={{mr:1}}/>} 
                    sx={{mr:2, color:'white', border:'1px solid white'}} 
                    onClick = {logout}> logout
                </Button>
            </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      
      <div className={classes.container}>
        <Drawer
          variant="permanent"
          anchor="right"
          open={isOpened}
          classes={{
            paper: clsx(classes.drawer, {
              [classes.closed]: !isOpened,
              [classes.opened]: isOpened,
            }),
          }}
        >
          { isOpened
          ? SidebarData.map((item, index)=>{
            return(
              <Box key={index}>
              <SubMenu item={item} key = {index}/>
              <Divider/>
              </Box>
            )})
          : SidebarData.map((item, index)=>{
            return(
              <Box key={index}>
              <SubMenuIcons item={item} key={index}/>
              <Divider/>
              </Box>
            )
          })}
          <Divider/>
        </Drawer>
        <main className={classes.main}>
              {children}
        </main>
      </div>

      {/* <div className={classes.footer}>
        <Typography variant="h6">Footer</Typography>
      </div> */}
    </div>

  );
};

export default Sidebar;