import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



function HomePage(){
    return(
        <Container  component="main" maxWidth="md" sx={{mt:4}}>
            <Grid item xs={12} sm={6}>
            <Typography  align='right' >سلام</Typography>    
            </Grid>
        </Container>
    )
}
export default HomePage;