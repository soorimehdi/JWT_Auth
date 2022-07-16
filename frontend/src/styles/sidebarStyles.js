import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "#000133",
  },
  appBar: {
    background: 'blue',
    color: "#FC86AA",
  },
  icon: {
    padding: "10px",
    color:'white'
  },
  title: {
    margin: "auto",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  drawer: {
    background: 'blue',
    position: "static",
    transition: "width .7s",
    paddingTop:70,    
  },
  closed: {
    width: "0px",
  },
  opened: {
    width: "300px",
  },
  main: {
    flex: 1,
    background: "#f7f5f5",
    color: "black",
    alignItems:'center',
    justifyContent: 'center'
  },
  footer: {
    background: 'blue',
    height: "50px",
    color: "white",
    padding:10,
  },
})

  export default useStyles;