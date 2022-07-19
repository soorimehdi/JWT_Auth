import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



function HomePage(){
    return(
        <Container  component="main" maxWidth="md" sx={{mt:4}}>
            <Grid item xs={12} sm={6}>
            <Typography variant='h3' display={'flex'} justifyContent='center'>
                home page is public route
                
                
                </Typography>    
            </Grid>
        </Container>
    )
}
export default HomePage;