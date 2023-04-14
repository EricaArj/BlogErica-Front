import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css'

function Home() {
  return (
    <>
    
      <Grid
      
        container direction="row" justifyContent="center" alignItems="center"
        style={{ backgroundColor: 'var(--ameixa-200)' }}
      >
       
        <Grid alignItems="center" item xs={6}>
        <div className="wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
            <Box paddingX={20}  >
              <Typography
                  variant="h3"
                  gutterBottom
                  color="textPrimary"
                  component="p"
                  align="center"
                  style={{ 
                    color: 'black', 
                    fontWeight: 'bold', 
                    fontSize: '6vw',  // Utilizando a unidade "vw"
                    whiteSpace: 'nowrap' 
               }}
             >
               Seja bem vindo(a)!
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                style={{ 
                  color: 'black', 
                  fontWeight: 'bold', 
                  fontSize: '3vw',  // Utilizando a unidade "vw"
                  whiteSpace: 'nowrap' 
             }}
           >
                Deixe o seu Comentario!
              </Typography>
            </Box>
          </div>
          <Box display="flex" justifyContent="center">
                    <Button className='HomeButton'
                      variant="outlined"
                      style={{
                        borderColor: 'var(--ameixa-200)',
                        backgroundColor: 'var(--lavanda-400)',
                        color: 'var(--ameixa-200)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Ver Postagens
                    </Button>
              </Box>
        </Grid>
        
       <Grid container>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Grid item xs={6}>
              <img src="https://i.imgur.com/hhuyFuC.png" alt="imagem de uma menina coelho" className='foto' />
            </Grid>
          </div>
        </Grid>


        <Box sx={{ backgroundColor: 'transparent', backgroundImage: 'url()', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      </Box>
    </Grid>
    </>
  );
}

export default Home;