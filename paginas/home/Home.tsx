import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css'
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import TabPostagens from '../../components/postagens/tabPostagens/TabPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: 'var(--branco-100)' }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}  >
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="p"
              align="center"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Button
              variant="outlined"
              style={{
                borderColor: 'black',
                backgroundColor: 'var(--v-600)',
                color: 'black',
              }}
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/hhuyFuC.png"
            alt=""
            className='fotoHome'
          />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: 'white' }}>
          <TabPostagens />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
