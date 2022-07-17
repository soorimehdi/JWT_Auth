import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "#000133",
  },
  appBar: {
    color: "#FC86AA",
    display:'fixed',
    backgroundColor: blue[900]
  },
  icon: {
    padding: "10px",
    marginRight: '0px',
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
    position: "static",
    transition: "width .7s",
    paddingTop:70,
    backgroundColor:blue[700]
  },
  closed: {
    width: "60px",
  },
  opened: {
    width: "300px",
  },
  main: {
    flex: 1,
    background: "#f7f5f5",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
    paddingBottom:20,
  },
  footer: {
    background: 'blue',
    height: "50px",
    color: "white",
    padding:10,
    textAlign:'center'
  },
})

  export default useStyles;